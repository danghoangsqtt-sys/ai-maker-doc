import rawData from './raw_data.md?raw';

function parseCourseData(mdContent) {
  // Split the raw string by "## PHẦN"
  const parts = mdContent.split(/## PHẦN /g);

  // parts[0] is the introduction (Dashboard)
  let introPart = parts[0];
  const filterIndex = introPart.indexOf('## MỤC ĐÍCH');
  if (filterIndex !== -1) {
    introPart = introPart.substring(filterIndex);
  }
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

export const courseData = parseCourseData(rawData);
