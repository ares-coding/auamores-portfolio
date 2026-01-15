import gradio as gr
import time
import random

# 🔮 Placeholder "model"
def predict_image(image):
    if image is None:
        return {"Normal": 0.0, "Intoxicated": 0.0}, 0.0

    time.sleep(0.8)

    if random.random() > 0.5:
        return {"Normal": 0.12, "Intoxicated": 0.88}, 0.88
    else:
        return {"Normal": 0.91, "Intoxicated": 0.09}, 0.91




with gr.Blocks(theme=gr.themes.Soft()) as demo:
    gr.Markdown("## 🍺 Alcohol Intoxication Detection (Demo)")
    gr.Markdown(
        "Upload a face image to see a **simulated prediction**. "
        "This demo showcases the **UI + inference flow** using Gradio."
    )

    with gr.Row():
        image_input = gr.Image(
            label="Upload Face Image",
            type="pil"
        )

        with gr.Column():
            label_output = gr.Label(
                label="Prediction"
            )
            confidence_output = gr.Number(
                label="Confidence Score"
            )

    btn = gr.Button("Run Prediction 🚀")

    btn.click(
        fn=predict_image,
        inputs=image_input,
        outputs=[label_output, confidence_output]
    )

    gr.Markdown(
        "<small>Demo only — model logic will be replaced with CNN/SVM inference.</small>"
    )

demo.launch()
