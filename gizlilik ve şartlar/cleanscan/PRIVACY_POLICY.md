# Privacy Policy for CleanScan

**Last Updated:** August 25, 2026  
**Effective Date:** August 25, 2026  
**Application Name:** CleanScan: PDF Document Scanner & OCR  
**Developer / Publisher:** Limitra  
**Contact Email:** support@limitra.com  

---

## 1. Introduction & Core Philosophy
Welcome to **CleanScan** ("we", "our", or "us"), developed by **Limitra**. We are deeply committed to safeguarding your privacy and respecting the confidentiality of your personal information.

CleanScan is built from the ground up on a **Zero-Server & Privacy-First (100% On-Device)** architecture. Unlike traditional cloud-based document scanner applications that upload your sensitive documents, contracts, official IDs, and confidential notes to external web servers, CleanScan processes, extracts, and stores your data exclusively on your local device.

By downloading, installing, or using CleanScan, you agree to the collection and use of information in accordance with this Privacy Policy.

---

## 2. Information We DO NOT Collect (Zero-Server Architecture)
Because CleanScan functions entirely on-device:
* **No Document Uploads:** We do not upload, transmit, store, or view any photos, scanned documents, PDF files, OCR text, or digital signatures on any external server or cloud infrastructure.
* **No Mandatory Account Registration:** You can use all core scanning, editing, and PDF creation features completely anonymously without creating an account or providing personal details.
* **No Remote Telemetry or Document Mining:** We do not scan your documents for telemetry, behavioural analytics, advertising profiling, or artificial intelligence training.

---

## 3. Information We Process Locally on Your Device

### 3.1 Sandboxed Local Storage
The following information is created and retained strictly within your device's isolated application sandbox (`Application Documents Directory`):
* **Scanned Images & PDF Documents:** Document pages captured via your camera or imported from your device gallery.
* **Extracted Text (OCR):** Text recognized using Google ML Kit's local on-device machine learning models.
* **Digital Signatures:** Vector coordinates of hand-drawn signatures saved in your private signature library.
* **Encrypted Documents:** Files protected with user-defined passwords using ISO 32000-1 128-bit PDF Standard Encryption.
* **App Preferences & Token Balance:** Local configuration parameters (default image filters, biometric lock status, and reward token balance).

*Note: You retain 100% ownership and control over this data. Uninstalling CleanScan or clearing app data in device settings permanently deletes all local files.*

---

## 4. Device Permissions Requested & Why

To provide its core capabilities, CleanScan requests specific permissions on your Android / iOS device:

| Permission | Purpose | Data Handling & Privacy |
| :--- | :--- | :--- |
| **Camera (`CAMERA`)** | Capturing document photos, multi-page scans, ID card scans, and scanning QR / barcodes. | Video frames are processed in real-time in volatile device RAM. No camera feed is ever transmitted externally. |
| **Storage / Media (`READ_MEDIA_IMAGES`, `READ_EXTERNAL_STORAGE`)** | Importing photos/PDFs from device storage and saving exported PDF/JPEG files. | Access is strictly restricted to files you explicitly choose to import or export. |
| **Biometric (`USE_BIOMETRIC`, `USE_FINGERPRINT`)** | Optional local biometric lock (Fingerprint / Face ID) to protect the application. | Handled entirely by operating system security hardware; CleanScan never has access to raw biometric data. |
| **Internet Access (`INTERNET`)** | Displaying Google AdMob rewarded advertisements and loading ML Kit OCR model assets if required. | No document, image, or scan data is ever transmitted over network connections. |

---

## 5. Third-Party Services & Libraries

While CleanScan operates without developer servers, we integrate trusted third-party SDKs to provide on-device intelligence, advertisements, and store billing:

### 5.1 Google ML Kit (Document Scanner & Text Recognition)
* **Purpose:** Provides automatic document edge detection, perspective correction, shadow removal, and on-device Optical Character Recognition (OCR).
* **Privacy Standard:** ML Kit models run locally on the device processor. Your images and recognized text are never transmitted to Google servers.
* **Privacy Policy:** [Google Privacy Policy](https://policies.google.com/privacy)

### 5.2 Google Mobile Ads (AdMob)
* **Purpose:** CleanScan utilizes a **Rewarded Ad Token Economy**, allowing users to unlock premium features (such as bulk OCR or ID card wizard) for free by choosing to watch short video advertisements.
* **Data Processed:** AdMob may collect and process pseudonymous identifiers (such as Google Advertising ID / IDFA), device parameters, IP address, and ad interaction metrics to deliver non-personalized or personalized ads and prevent ad fraud.
* **Opt-Out:** You can reset or limit your Advertising ID in your device settings (`Settings > Google > Ads` on Android).
* **Privacy Policy:** [Google AdMob Privacy Policy](https://policies.google.com/technologies/ads)

### 5.3 Google Play In-App Billing
* **Purpose:** For users who prefer an ad-free experience or wish to purchase token packages / PRO lifetime licenses.
* **Data Processed:** All payment transactions, credit card data, and billing details are processed securely and exclusively by the Google Play Store. CleanScan does not collect or store financial or credit card information.

---

## 6. Data Security & Encryption
* **Local Sandboxing:** Your documents and signatures are stored in the private application directory, inaccessible to other standard apps without root/system privileges.
* **PDF Standard Encryption:** When you set a password on a document, CleanScan applies industry-standard ISO 32000-1 128-bit encryption (Standard Security Handler with MD5/RC4 ciphering) before writing the file.
* **Optional Biometric Authentication:** You may enable local biometric app locking to protect CleanScan from unauthorized physical access.

---

## 7. Children's Privacy (COPPA & GDPR Compliance)
CleanScan does not knowingly collect, store, or solicit personal information from children under the age of 13 (or under 16 in the European Union). Because our application processes all document data locally and does not collect personal identifiers, it is safe for general audiences. If you believe that a child has provided us with personal information through third-party ad interactions, please contact us for prompt review.

---

## 8. International Compliance (GDPR & CCPA/CPRA & KVKK)

### 8.1 European Union (GDPR) Rights
Under the General Data Protection Regulation, EU users have the right to:
* Access, rectify, or erase all local personal data (accessible at any time by viewing, exporting, or deleting documents within the app).
* Restrict or object to ad processing by adjusting advertising preferences or choosing ad-free purchases.
* Data Portability: You can export your documents in standard open PDF or JPEG formats at any time.

### 8.2 California Privacy Rights (CCPA / CPRA)
CleanScan does not sell or share personal document data. For ad-supported interactions, California residents may manage their advertising tracking settings through device-level privacy toggles.

---

## 9. Changes to This Privacy Policy
We may update our Privacy Policy periodically to reflect app updates, technical improvements, or legal obligations. Any updates will be posted in this document and reflected within the app's *Settings & Profile* section with a revised "Last Updated" date.

---

## 10. Contact Us
If you have any questions, suggestions, or concerns regarding this Privacy Policy or your data security in CleanScan, please contact us:

* **Company / Brand:** Limitra
* **Product:** CleanScan
* **Email:** support@limitra.com / contact@limitra.com  
* **Official Website:** [https://limitra.com](https://limitra.com)
