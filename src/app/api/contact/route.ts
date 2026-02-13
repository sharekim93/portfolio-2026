import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

// Resend 인스턴스 생성
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    // 입력 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `이름은 ${MAX_NAME_LENGTH}자 이하여야 합니다.` },
        { status: 400 }
      );
    }

    if (email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `메시지는 ${MAX_MESSAGE_LENGTH}자 이하여야 합니다.` },
        { status: 400 }
      );
    }

    // Resend API 키가 설정되지 않은 경우
    if (!resend) {
      console.log("Contact form submission (no email sent):", {
        name,
        email,
        message,
      });
      return NextResponse.json({
        success: true,
        warning: "이메일 서비스가 설정되지 않았습니다.",
      });
    }

    // Resend로 이메일 전송
    const { data, error } = await resend.emails.send({
      from: "포트폴리오 문의 <onboarding@resend.dev>", // Resend 무료 티어는 onboarding@resend.dev 사용
      to: ["sksyag@naver.com"], // 수신자 이메일
      replyTo: email, // 답장 주소를 문의자 이메일로 설정
      subject: `[포트폴리오 문의] ${name}님의 메시지`,
      html: `
        <h2>새로운 문의가 도착했습니다</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>메시지:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">이 메시지는 nanum.dev 포트폴리오 사이트에서 전송되었습니다.</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
