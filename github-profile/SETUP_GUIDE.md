# 🕷️ GitHub Profile Setup Guide — Manpreet Singh (`mxnpreet7`)

This guide walks you through deploying your new **Spider-Man × Apple Minimalist** GitHub Profile README to your public profile in 3 simple steps.

---

## 📁 Repository Structure

Your special GitHub profile repository must match your username: `mxnpreet7/mxnpreet7`.

```text
mxnpreet7/ (special repository)
├── README.md
└── assets/
    ├── header.svg
    ├── divider.svg
    ├── journey.svg
    ├── philosophy.svg
    └── footer.svg
```

---

## 🚀 Step-by-Step Deployment Instructions

### Method 1: Using GitHub Web Interface (Fastest)

1. **Navigate to GitHub**: Go to [github.com/new](https://github.com/new).
2. **Create Special Repository**:
   - Repository name: `mxnpreet7` *(GitHub will display a secret banner: "You found a secret! mxnpreet7/mxnpreet7 is a special repository that you can use to add a README.md to your GitHub profile.")*
   - Make sure **Public** is selected.
   - Check **"Add a README file"**.
   - Click **Create repository**.
3. **Upload the `assets/` folder & `README.md`**:
   - In your newly created `mxnpreet7` repository, click **Add file** > **Upload files**.
   - Drag and drop the `README.md` and the entire `assets/` folder containing the 5 SVG files.
   - Click **Commit changes**.
4. **View your profile**:
   - Visit [github.com/mxnpreet7](https://github.com/mxnpreet7) to see your cinematic developer profile live!

---

### Method 2: Using Git Command Line

If you prefer using Git in your terminal:

```bash
# 1. Clone your special profile repo (or initialize locally)
git clone https://github.com/mxnpreet7/mxnpreet7.git
cd mxnpreet7

# 2. Copy the README.md and assets/ folder into the repo
# (Copy from portfolio/github-profile/)

# 3. Stage, commit, and push
git add .
git commit -m "feat: cinematic spider-man x apple developer profile readme"
git push origin main
```

---

## 🎨 Design System & Visual Elements Breakdown

1. **Header Banner (`assets/header.svg`)**:
   - **Spider-Man Web Geometry**: Subtle mathematical spider-web coordinates radiating from the top right and bottom left corners.
   - **Apple-Level Minimalism**: Clean typography with generous whitespace, subtle obsidian glow, and crimson accents.
   - **System Pill**: Displays real-time student developer coordinates (`CHANDIGARH, IN • SVIET`).

2. **Divider Line (`assets/divider.svg`)**:
   - High-precision gradient hairline with a glowing center diamond node replacing standard markdown horizontal rules (`---`).

3. **Learning Trajectory (`assets/journey.svg`)**:
   - Interactive visual roadmap showing your real academic evolution across 5 stages without exaggerating or fabricating skills.

4. **Philosophy Card (`assets/philosophy.svg`)**:
   - Three core engineering tenets formatted in Apple spec style with spider-crimson badges.

5. **Closing Anchor (`assets/footer.svg`)**:
   - Geometric spider emblem and minimalist signature line (*"Built with curiosity • Coded with intent"*).
