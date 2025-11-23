import sharp from "sharp";
import path from "path";
import fs from "fs";

const inputPath = path.join(process.cwd(), "assets/icon.svg");
const outputPath = path.join(process.cwd(), "assets/icon.png");

async function convertIcon() {
    try {
        if (!fs.existsSync(inputPath)) {
            console.error("Input file not found:", inputPath);
            process.exit(1);
        }

        await sharp(inputPath).resize(128, 128).png().toFile(outputPath);

        console.log("Icon converted successfully:", outputPath);
    } catch (error) {
        console.error("Error converting icon:", error);
        process.exit(1);
    }
}

convertIcon();
