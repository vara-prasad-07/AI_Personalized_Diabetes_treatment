from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai  # Make sure the geminai library is installed

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from your frontend

# Initialize the Gemini AI client with your API key
client = genai.Client(api_key="AIzaSyCzWEZR6C6k13PSGHheeBXPAy0h0koxFCM")

@app.route('/generate', methods=['POST'])
def generate():
    # Get the JSON payload from the request
    data = request.get_json()
    prompt_text = data.get("prompt", "")
    if not prompt_text:
        return jsonify({"error": "Prompt not provided"}), 400

    try:
        # Call the Gemini AI API to generate content
        response = client.models.generate_content(
            model="gemini-2.0-flash",  # Adjust model name if necessary
            contents=prompt_text
        )
        # Retrieve the generated text from the response
        generated_text = response.text
        return jsonify({"generated_text": generated_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
