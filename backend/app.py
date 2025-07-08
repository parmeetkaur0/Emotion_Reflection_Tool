from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
from datetime import datetime

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def analyze_text(text: str):
    text_lower = text.lower()
    if any(word in text_lower for word in ["happy", "joy"]):
        return {"emotion": "happy", "confidence": 0.9}
    elif any(word in text_lower for word in ["sad", "depressed"]):
        return {"emotion": "sad", "confidence": 0.85}
    elif any(word in text_lower for word in ["anxious", "nervous"]):
        return {"emotion": "anxious", "confidence": 0.95}
    elif any(word in text_lower for word in ["angry", "mad"]):
        return {"emotion": "angry", "confidence": 0.88}
    elif any(word in text_lower for word in ["excited", "enthusiastic"]):
        return {"emotion": "excited", "confidence": 0.92}
    else:
        return {"emotion": "neutral", "confidence": 0.7}

@app.route('/analyze', methods=['POST', 'OPTIONS'])
def analyze():
    if request.method == 'OPTIONS':
        return '', 200
    try:
        data = request.get_json()
        if not data or 'text' not in data:
            logger.warning("No text provided in request")
            return jsonify({"error": "No text provided"}), 400

        text = data['text']
        if not text.strip():
            logger.warning("Empty text provided")
            return jsonify({"error": "Text cannot be empty"}), 400

        logger.info(f"Analyzing text: {text}")
        result = analyze_text(text)
        logger.info(f"Analysis result: {result}")
        return jsonify(result)
    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    logger.info("Starting Emotion Reflection Tool API...")
    app.run(debug=True, port=5000)