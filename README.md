# Audio Transcribe

A Spring Boot application that converts audio files to text using OpenAI's Whisper API. Simply upload an audio file and get back the transcribed text instantly.

## Features

- 🎙️ **Audio Transcription** - Convert audio files to text using OpenAI's Whisper model
- 🚀 **REST API** - Simple HTTP endpoint for uploading and transcribing audio
- 🛠️ **Spring AI Integration** - Leverages Spring AI for seamless OpenAI integration
- ⚡ **Fast & Reliable** - Powered by Whisper-1, OpenAI's reliable speech recognition model

## Prerequisites

- Java 17+
- Maven 3.6+
- OpenAI API key

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd audio-transcribe
```

### 2. Set Your OpenAI API Key

Edit `src/main/resources/application.properties`:

```properties
spring.ai.openai.api-key=your-openai-api-key-here
```

Or set the environment variable:

```bash
export SPRING_AI_OPENAI_API_KEY=your-openai-api-key-here
```

### 3. Build the Application

```bash
./mvnw clean package
```

### 4. Run the Application

```bash
./mvnw spring-boot:run
```

The application will start on `http://localhost:8080`

## Usage

### Transcribe Audio

Send a POST request with an audio file:

```bash
curl -X POST -F "file=@/path/to/audio.wav" http://localhost:8080/api/transcribe
```

**Request:**
- Endpoint: `POST /api/transcribe`
- Parameter: `file` (multipart file) - Audio file in WAV format

**Response:**
```
The transcribed text from your audio file
```

### Example

```bash
# Transcribe a WAV file
curl -X POST -F "file=@recording.wav" http://localhost:8080/api/transcribe

# Response:
# "Hello, this is a test recording of audio transcription."
```

## Configuration

Configuration is managed in `src/main/resources/application.properties`:

```properties
spring.application.name=audio-transcribe
spring.ai.openai.api-key=your-api-key
spring.ai.openai.audio.transcription.base-url=https://api.openai.com
spring.ai.openai.audio.transcription.options.model=whisper-1
spring.ai.openai.audio.transcription.options.response-format=json
```

## Project Structure

```
audio-transcribe/
├── src/main/
│   ├── java/com/audio/audiotranscribe/
│   │   └── TranscriptionController.java    # Main REST API controller
│   └── resources/
│       └── application.properties           # Application configuration
├── pom.xml                                 # Maven dependencies
└── README.md
```

## Technologies Used

- **Spring Boot 3.5.14** - Web framework
- **Spring AI 1.1.6** - AI/ML integration library
- **OpenAI API** - Whisper-1 model for audio transcription
- **Java 17** - Programming language

## Error Handling

The application returns appropriate HTTP status codes:

- `200 OK` - Successful transcription
- `400 Bad Request` - No file provided or invalid file format
- `500 Internal Server Error` - OpenAI API error or server error

## Troubleshooting

### API Key Error
Ensure your OpenAI API key is correctly set in `application.properties` or environment variables.

### File Upload Issues
Make sure the audio file is in a supported format (WAV, MP3, etc.) and not too large.

### Build Failures
```bash
# Clean and rebuild
./mvnw clean install
```

## License

This project is licensed under the MIT License.

## Support

For issues or questions:
- Check [Spring AI Documentation](https://docs.spring.io/spring-ai/reference/)
- Review [OpenAI API Documentation](https://platform.openai.com/docs/api-reference/audio)
