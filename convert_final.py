from PIL import Image
import cv2
import numpy as np

# 6.7MB verified recording: Gemini -> Wokwi Raspberry Pi Pico pipeline
src = r'C:\Users\dangh\.gemini\antigravity\brain\c278fcea-3e67-4ebe-b9b4-ebfd11f8042d\tutorial_2_gemini_wokwi_1775231994695.webp'
dst_raw = r'c:\Users\dangh\OneDrive\Desktop\document_study\ai_quan_su_elearning\public\videos\tutorial_2_raw_final.mp4'

img = Image.open(src)
total = img.n_frames
print(f"Total frames: {total}")

out = None
for i in range(total):
    img.seek(i)
    frame = img.convert('RGB')
    frame_cv = np.array(frame)[:, :, ::-1]
    if out is None:
        h, w, _ = frame_cv.shape
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        # 20 FPS = fast paced video
        out = cv2.VideoWriter(dst_raw, fourcc, 20.0, (w, h))
    out.write(frame_cv)

out.release()
print(f"Done: {total} frames")
