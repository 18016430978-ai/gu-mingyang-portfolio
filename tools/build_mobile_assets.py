from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "works-web"
DESTINATION = ROOT / "assets" / "works-mobile"
TARGET_WIDTH = 1280


def build_mobile_image(source: Path) -> Path:
    relative = source.relative_to(SOURCE)
    destination = DESTINATION / relative
    destination.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source) as image:
        image = image.convert("RGB")
        height = round(image.height * TARGET_WIDTH / image.width)
        image = image.resize((TARGET_WIDTH, height), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=72, method=6)

    return destination


outputs = [build_mobile_image(path) for path in sorted(SOURCE.rglob("*.webp"))]
total_bytes = sum(path.stat().st_size for path in outputs)
print(f"Generated {len(outputs)} mobile images ({total_bytes / 1024 / 1024:.2f} MB)")
