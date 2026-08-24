from pathlib import Path

from PIL import Image, ImageEnhance


SOURCE = Path(r"D:\保研\codex\tmp\portfolio_pages")
DESTINATION = Path(r"D:\保研\codex\outputs\gu-mingyang-portfolio\assets")
PAGES = DESTINATION / "pages"
PAGES.mkdir(parents=True, exist_ok=True)


for source in sorted(SOURCE.glob("page-*.jpg")):
    image = Image.open(source).convert("RGB")
    image.save(PAGES / f"{source.stem}.webp", "WEBP", quality=84, method=6)


portrait_source = Path(r"D:\保研\codex\tmp\portfolio_pages_hd\page-02.jpg")
if portrait_source.exists():
    page_two = Image.open(portrait_source).convert("RGB")
    portrait = page_two.crop((110, 670, 918, 1859))
else:
    page_two = Image.open(SOURCE / "page-02.jpg").convert("RGB")
    portrait = page_two.crop((38, 230, 315, 638))
portrait = ImageEnhance.Contrast(portrait).enhance(1.04)
portrait.save(DESTINATION / "portrait.webp", "WEBP", quality=90, method=6)

cover = Image.open(SOURCE / "page-01.jpg").convert("RGB")
cover.crop((330, 0, 1485, 638)).save(
    DESTINATION / "echo-cover.webp", "WEBP", quality=88, method=6
)

print(f"Generated {len(list(PAGES.glob('*.webp')))} page assets in {PAGES}")
