import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { resume, projects, experience, skills } from "@/lib/data";

// Register fonts (using CDN Noto Sans KR)
Font.register({
  family: "NotoSansKR",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2107@1.1/Pretendard-Regular.woff",
      fontWeight: 400,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2107@1.1/Pretendard-Bold.woff",
      fontWeight: 700,
    },
  ],
});

// Styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 40,
    fontFamily: "NotoSansKR",
  },
  // Header
  header: {
    backgroundColor: "#374151", // accent color (charcoal)
    marginLeft: -40,
    marginRight: -40,
    marginTop: -40,
    padding: 30,
    marginBottom: 20,
  },
  headerName: {
    fontSize: 28,
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 14,
    color: "#ffffff",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 10,
    color: "#ffffff",
    opacity: 0.9,
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  contactItem: {
    fontSize: 9,
    color: "#ffffff",
  },
  // Section
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 600, // semi-bold
    color: "#1a1a1a",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e5e5e5",
    marginBottom: 12,
  },
  // Summary
  summaryText: {
    fontSize: 11,
    color: "#1a1a1a",
    lineHeight: 1.6,
  },
  // Experience
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#1a1a1a",
  },
  experiencePeriod: {
    fontSize: 9,
    color: "#666666",
  },
  currentBadge: {
    fontSize: 8,
    color: "#374151", // accent color (charcoal)
    fontWeight: 700,
  },
  // Projects
  projectItem: {
    marginBottom: 14,
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: 2,
  },
  projectMeta: {
    fontSize: 9,
    color: "#666666",
    marginBottom: 4,
  },
  achievementItem: {
    fontSize: 9,
    color: "#333333",
    marginLeft: 10,
    marginBottom: 2,
    lineHeight: 1.4,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4,
  },
  tag: {
    backgroundColor: "#f5f5f5",
    color: "#666666",
    fontSize: 7,
    padding: "3 6",
    borderRadius: 3,
  },
  // Skills
  skillCategory: {
    flexDirection: "row",
    marginBottom: 6,
  },
  skillLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: "#1a1a1a",
    width: 80,
  },
  skillValue: {
    fontSize: 10,
    color: "#333333",
    flex: 1,
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 7,
    color: "#999999",
  },
});

export function ResumePDF() {
  const { personalInfo, summary: resumeSummary } = resume;
  const featuredProject = projects.find((p) => p.featured);
  const topProjects = projects.filter((p) => !p.featured).slice(0, 2);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerName}>{personalInfo.name}</Text>
          <Text style={styles.headerTitle}>{personalInfo.title}</Text>
          <Text style={styles.headerSubtitle}>{personalInfo.subtitle}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>Email: {personalInfo.email}</Text>
            <Text style={styles.contactItem}>Phone: {personalInfo.phone}</Text>
            <Text style={styles.contactItem}>Web: {personalInfo.website}</Text>
            <Text style={styles.contactItem}>GitHub: {personalInfo.github}</Text>
            <Text style={styles.contactItem}>Tistory: {personalInfo.tistory}</Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SUMMARY</Text>
          <View style={styles.divider} />
          <Text style={styles.summaryText}>{resumeSummary}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>
          <View style={styles.divider} />
          {experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceTitle}>
                  {exp.title} • {exp.company}
                </Text>
                <Text style={styles.experiencePeriod}>
                  {exp.period}
                  {exp.current && (
                    <Text style={styles.currentBadge}> (현재)</Text>
                  )}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Featured Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FEATURED PROJECTS</Text>
          <View style={styles.divider} />

          {featuredProject && (
            <View style={styles.projectItem}>
              <Text style={styles.projectTitle}>{featuredProject.title}</Text>
              <Text style={styles.projectMeta}>
                {featuredProject.company} • {featuredProject.period}
              </Text>
              {featuredProject.achievements.slice(0, 3).map((achievement, i) => (
                <Text key={i} style={styles.achievementItem}>
                  • {achievement}
                </Text>
              ))}
              <View style={styles.tagsRow}>
                {featuredProject.tags.map((tag, i) => (
                  <Text key={i} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
          )}

          {topProjects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectMeta}>
                {project.company} • {project.period}
              </Text>
              {project.achievements.slice(0, 2).map((achievement, i) => (
                <Text key={i} style={styles.achievementItem}>
                  • {achievement}
                </Text>
              ))}
              <View style={styles.tagsRow}>
                {project.tags.slice(0, 4).map((tag, i) => (
                  <Text key={i} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.divider} />
          <View style={styles.skillCategory}>
            <Text style={styles.skillLabel}>Languages:</Text>
            <Text style={styles.skillValue}>{skills.languages.join(", ")}</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillLabel}>Frameworks:</Text>
            <Text style={styles.skillValue}>
              {skills.frameworks.join(", ")}
            </Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillLabel}>View:</Text>
            <Text style={styles.skillValue}>{skills.view.join(", ")}</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillLabel}>Deploy:</Text>
            <Text style={styles.skillValue}>{skills.deploy.join(", ")}</Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Generated: {new Date().toISOString().split("T")[0]}
        </Text>
      </Page>
    </Document>
  );
}
