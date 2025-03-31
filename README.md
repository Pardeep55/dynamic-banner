# dynamic-banner
Banner Integration API
Overview
This project provides a simple Express.js API that serves banner details and allows third-party websites to embed a banner dynamically.
Features
    • Provides an API endpoint (/api/banner) that returns banner details (image URL, link, alt text, width, height, position).
    • Serves an HTML file (index.html) to display the banner.
    • Allows embedding banners via a JavaScript script.
    • Supports optional parameters (width, height, position) for customization.
Installation
1. Clone the Repository
git clone https://github.com/Pardeep55/dynamic-banner.git
cd banner-api
2. Install Dependencies
npm install
3. Start the Server
node server.js
The server will start on http://localhost:3000/.
API Endpoints
1. Get Banner Details
Endpoint: GET /api/banner
Request Parameters (Optional)
Parameter
Description
Default Value
width
Width of the banner
300px
height
Height of the banner
250px
position
Position on the webpage (bottom-right, top-left, etc.)
bottom-right
Example Request
curl "http://localhost:3000/api/banner?width=320px&height=100px&position=top-right"
Example Response (JSON)
{
    "imageUrl": "https://www.jobma.com/new-images/email-template/email-header-bg-img.jpg",
    "link": "https://www.jobma.com/login",
    "altText": "Special Offer Banner",
    "width": "300px",
    "height": "250px",
    "position": "bottom-right"
}
2. Serve the HTML Page
Endpoint: GET /
    • Returns index.html from the public directory.
How to Embed the Banner
Third-party websites can embed the banner using:
<script src="https://yourdomain.com/banner.js" data-width="320px" data-height="100px" data-position="top-right"></script>
Project Structure
/project-folder
  ├── public/
  │     ├── index.html
  ├── server.js
  ├── package.json
  ├── README.md
License
This project is licensed under the MIT License.
Author
Developed by [Your Name]
