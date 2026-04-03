from PIL import Image
import cv2
import numpy as np

img = Image.open(r'C:\Users\dangh\.gemini\antigravity\brain\c278fcea-3e67-4ebe-b9b4-ebfd11f8042d\tutorial_1_canvas_1775228431545.webp')

out = None
for i in range(img.n_frames):
    img.seek(i)
    frame = img.convert('RGB')
    frame_cv = np.array(frame)
    frame_cv = frame_cv[:, :, ::-1]
    if out is None:
        height, width, _ = frame_cv.shape
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        out = cv2.VideoWriter(r'c:\Users\dangh\OneDrive\Desktop\document_study\ai_quan_su_elearning\public\videos\tutorial_1_fast.mp4', fourcc, 5.0, (width, height))
    out.write(frame_cv)

out.release()
print('Convert success')