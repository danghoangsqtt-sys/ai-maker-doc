/**
 * Merges updated course data back into a single raw Markdown string.
 * @param {Object} courseData - The current course data object.
 * @returns {string} The full Markdown string.
 */
export function mergeCourseData(courseData) {
  let fullContent = "";

  // 1. Rebuild the Intro/Dashboard part
  // Note: the parser looks for "## MỤC ĐÍCH" and strips before it, 
  // but for saving we want to preserve the beginning if possible.
  // In our simplified split, the first part is intro.
  fullContent += courseData.dashboard.theory + "\n\n";

  // 2. Add each module
  courseData.modules.forEach(module => {
    // Each module.theory already contains "## PHẦN " prefix from our parser
    fullContent += module.theory + "\n\n";
  });

  return fullContent.trim();
}

/**
 * Parses the raw Markdown string into courseData object.
 * (Copied logic from data.js but as a pure function)
 */
export function parseCourseData(mdContent) {
  const parts = mdContent.split(/## PHẦN /g);

  let introPart = parts[0];
  // Preserve everything before ## MỤC ĐÍCH if we want to be safe, 
  // but follows existing logic of finding first header.
  
  const chapters = parts.slice(1);

  return {
    dashboard: {
      id: 'dashboard',
      title: "XÂY DỰNG ỨNG DỤNG AI TRONG MÔI TRƯỜNG HỌC THUẬT – SƯ PHẠM",
      theory: introPart.trim()
    },
    modules: chapters.map((chap) => {
      const lines = chap.trim().split(/\r?\n/);
      const firstLine = lines[0].trim();
      const title = "Chương " + firstLine;

      return {
        id: "chuong-" + firstLine.split(':')[0].trim(),
        title: title,
        theory: '## PHẦN ' + chap.trim()
      };
    })
  };
}
