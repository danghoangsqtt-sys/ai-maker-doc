from PIL import Image
import cv2
import numpy as np

img = Image.open(r'C:\Users\dangh\.gemini\antigravity\brain\c278fcea-3e67-4ebe-b9b4-ebfd11f8042d\tutorial_2_iot_5_steps_1775231149523.webp')

out = None
for i in range(img.n_frames):
    img.seek(i)
    frame = img.convert('RGB')
    frame_cv = np.array(frame)
    frame_cv = frame_cv[:, :, ::-1]
    if out is None:
        height, width, _ = frame_cv.shape
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        out = cv2.VideoWriter(r'c:\Users\dangh\OneDrive\Desktop\document_study\ai_quan_su_elearning\public\videos\tutorial_2_fast.mp4', fourcc, 15.0, (width, height))
    out.write(frame_cv)

out.release()
print('Convert success')