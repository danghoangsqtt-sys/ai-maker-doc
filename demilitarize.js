import fs from 'fs';

const replacements = {
  "tác chiến": "thực tiễn",
  "Tác chiến": "Thực tiễn",
  "TÁC CHIẾN": "THỰC TIỄN",
  "chiến thuật": "chuyên môn",
  "Chiến thuật": "Chuyên môn",
  "môi trường quân sự – giáo dục": "môi trường học thuật – giáo dục",
  "môi trường quân sự": "môi trường học thuật",
  "quân sự": "học thuật",
  "Quân sự": "Học thuật",
  "QUÂN SỰ": "HỌC THUẬT",
  "quân đội": "cơ sở giáo dục",
  "Quân đội": "Cơ sở giáo dục",
  "QUÂN ĐỘI": "CƠ SỞ GIÁO DỤC",
  "chỉ huy": "quản lý",
  "Chỉ huy": "Quản lý",
  "Người Chỉ Huy": "Người Quản Lý",
  "cán bộ": "chuyên viên",
  "Cán bộ": "Chuyên viên",
  "chiến sĩ thông tin": "công cụ hỗ trợ",
  "Chiến dịch": "Dự án",
  "chiến dịch": "dự án",
  "mệnh lệnh": "yêu cầu",
  "Mệnh lệnh": "Yêu cầu",
  "MỆNH LỆNH": "YÊU CẦU",
  "quân kỳ": "chủ đạo",
  "Tham mưu": "Hành chính",
  "tham mưu": "hành chính",
  "phân đội": "đơn vị",
  "điều lệnh": "quy chế",
  "quán triệt": "nắm vững",
  "Quán triệt": "Nắm vững",
  "QUÁN TRIỆT": "NẮM VỮNG",
  "Chính trị": "Đào tạo"
};

function demilitarize(text) {
  let res = text;
  for (const [mil, acad] of Object.entries(replacements)) {
    const regex = new RegExp(mil, 'g');
    res = res.replace(regex, acad);
  }
  return res;
}

const paths = [
  'src/raw_data.md',
  'src/AIFlowchart.jsx',
  'src/App.jsx',
  'src/data.js'
];

for (const p of paths) {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    fs.writeFileSync(p, demilitarize(content), 'utf8');
  }
}

console.log('Demilitarized!');
