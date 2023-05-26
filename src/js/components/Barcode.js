import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

function Barcode() {
	function makeID(length) {
		let result = "";
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
	}

	const [qrCodeData, setQRCodeData] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			const newQRCodeData = generateQRCodeData();
			setQRCodeData(newQRCodeData);
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const generateQRCodeData = () => {
		const ID = "FTMA" + makeID(302);
		return ID;
	};

	useEffect(() => {
		// Generate initial QR code data
		const initialQRCodeData = generateQRCodeData();
		setQRCodeData(initialQRCodeData);
	}, []);

	return (
		<div>
			<div className="barcode-main" style={{ marginTop: "16px" }}>
				<QRCode value={qrCodeData} />
			</div>
		</div>
	);
}

export default Barcode;
