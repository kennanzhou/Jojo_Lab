# JojoSite Agent Guidelines

## Product Context

JojoSite is a parent-child learning app, usually used on an iPad by a child and a parent sitting together. The interface should feel like a playful learning tool, not a dense desktop admin panel and not a marketing landing page.

Primary use cases:
- A parent quickly starts an activity without explaining the UI.
- A child can tap, read, and understand the main controls from iPad distance.
- Learning modules should support short sessions, clear feedback, and low-friction switching between activities.

## Visual Style

- Keep the retro storybook / learning-lab feeling already present in the app.
- Use warm paper-like panels, clear borders, restrained shadows, and friendly color accents.
- Avoid tiny, compressed, productivity-dashboard styling.
- Avoid decorative gradients, floating blobs, generic hero-card compositions, or visual effects that make the app feel less tactile.
- Cards and panels should remain simple, with 8px-ish rounded corners unless an existing local style says otherwise.
- Do not nest cards inside cards unless the inner card is a genuine repeated item or modal surface.
- The top brand slogan should feel cool and energetic, not sentimental or family-poster-like. Display it straight and stable, without tilted or wobbly decorative treatment.

## Typography

- Design for iPad readability first.
- Avoid font sizes below 15px for labels in active learning surfaces.
- Main controls, inputs, and buttons should usually use 16-18px text.
- Child-facing prompts and result text should be noticeably larger than settings labels.
- Do not shrink text just to force a layout to fit. Rework the layout instead.
- Letter spacing should stay normal; avoid negative tracking.

## Touch Controls

- Buttons, selects, inputs, and major tap targets should be at least 48px tall, preferably 50-56px on iPad.
- Do not make compact desktop-style 38-42px controls in learning views.
- Important action buttons in learning workflows should use 18px text when space allows. If labels feel cramped, split actions into two rows instead of shrinking text.
- Use icons where they improve recognition, but never at the cost of clarity for parent-child use.
- Select menus need extra care: if using custom arrows/backgrounds, verify their height and arrow position after any size change.

## Layout Rules

- iPad landscape is the main layout target. Verify around 1024x768 and the default browser viewport when changing major screens.
- Each app should own its own settings interface. Do not put every setting into one global catch-all dialog.
- The Home settings interface owns shared API configuration such as MiniMax keys/endpoints. App-specific learning controls belong inside that app's settings entry.
- Keep app settings near the app title bar or inside that app's workflow, with large touch-friendly buttons.
- App settings should use the unified top-right gear in the top bar. Do not add separate text settings buttons inside each module title area.
- The unified settings gear must match the neighboring top-bar visual-mode button in size, border, radius, background, and shadow.
- When the home view already has the unified gear, do not add an extra "主页设置" button inside the poster or content area.
- The main top-bar brand should read horizontally as "JOJO LAB · PLAY HARD, THINK SHARP." after the logo. If using a handwritten slogan asset, keep it transparent and recolor it to the current slogan color rather than embedding a mismatched background.
- Program surfaces should use solid paper-like backgrounds, not gradient backgrounds.
- Left-side control panels should show their core workflow without feeling clipped. If everything cannot fit, prefer a comfortable internal scroll over tiny text.
- On phone/narrow layouts for Word Camp, put the word card and answer options above the control/progress panel. The practice surface comes first; controls move below.
- Keep Song Notes' left panel as one coherent workflow:
  - Song information in one grouped window.
  - Explanation depth as an obvious full-size select.
  - Lyrics as a readable text area.
  - Actions large enough for touch, preferably a two-column/two-row grid rather than four cramped buttons.
- On mobile/narrow widths, stacked layouts are fine. Avoid horizontal squeezing.
- Never solve a fit problem by making the UI too small for iPad fingers.

## Song Notes Specifics

- "歌曲线索", "歌曲名", and "歌手 / 来源" belong together as one "歌曲信息" window.
- The MiniMax workflow should make real API errors visible. Do not show "没有找到明确候选" when the model returned an error such as invalid key, quota, model, or endpoint failure.
- Successful song analyses must persist. A refreshed page should restore the latest analysis and expose recent analyzed songs in the Song Notes workflow.
- The app must not auto-generate, scrape, or display full commercial lyrics. Users should paste lyrics they own, are authorized to use, or can reasonably use for private study.
- Song Notes vocabulary extraction must include every unique meaningful English word that appears in the user-provided lyrics, including simple image/action words, repeated chorus words, and inflected surface forms. Do not skip words like sun/day/run just because they are easy.
- Ultra-basic function words should not become standalone vocabulary entries, including articles, common conjunctions, be-verbs, basic pronouns, common prepositions, auxiliaries, and filler interjections such as a/an/the/and/is/to/of/in/with/from/that/I/you/will/oh. If these words appear inside a fixed phrase, keep the phrase entry but do not add the function word alone.
- Fixed phrases, lyric-specific expressions, and slang should be added as extra vocabulary entries, but they must not replace the individual meaningful word entries inside the phrase.
- Song actions should be short but clear: search candidate, analyze song, add to Word Camp.

## Kana Quest Specifics

- Kana Quest should use a Word Camp-style mastery progress panel.
- The progress panel covers all kana because the total set is fixed; do not add range or daily quantity controls to Kana Quest.
- Track hiragana and katakana separately while keeping the UI simple for parent-child practice.
- Kana Quest has its own reward bucket, separate from Word Camp/Card Cottage rewards. Award 1 small star only after 2 newly mastered kana; exchange 12 small stars for 1 big star. This makes kana rewards slower than Word Camp because kana questions are shorter.

## Phonics Quest Specifics

- Phonics Quest has two reward concepts: challenge points for unlocking unit challenges, and its own small/big star reward bucket. Keep the labels visually distinct.
- Completing a 30-point unit challenge for the first time awards 2 small stars; exchange 6 small stars for 1 big star. Replaying already completed units should not duplicate reward stars.
- Phonics rewards should feel comparable to Word Camp effort: harder than a few tap-through drills, but not so slow that a child cannot earn visible progress in a short session.

## Word Camp Specifics

- In "看英文选中文" mode, the optional VO follow-up setting means: play the official pronunciation at the start of each question; after the child picks the correct Chinese meaning, require the child to repeat the English word; advance only after speech recognition matches the word.
- If the child says it wrong or the app cannot hear clearly, play the official pronunciation again and ask for another repeat.
- The VO flow should not shrink buttons or crowd the exercise surface. Use clear feedback text and keep the main answer choices large.
- The VO follow-up setting should feel like part of the Word Camp settings form, not a separate bulky callout.
- In "看中文拼单词" mode, missing letters should avoid adjacent gaps whenever the word length allows it.
- Word Camp settings should edit mastery levels with compact level buttons, not a select menu; keep these rows low and comfortable for scanning.
- Word Camp owns daily word count, VO follow-up, word bank import, word bank switching, word mastery edits, and star reset settings.

## Card Cottage Specifics

- Card Cottage is a reward-card collection surface, not a placeholder page.
- Show unrevealed cards as tactile card objects with a real card back image, borders, thickness, and shadows.
- Keep unrevealed card faces clean: do not overlay letters, labels, or numbers on the card art.
- If card-back source art contains unwanted text, remove or repair the text in the asset itself; do not hide it by top-cropping the image.
- Card Cottage should show 4-6 cards per row depending on viewport width; avoid dense 8-card rows.
- The Card Cottage card grid should be vertically scrollable inside the card interface, rather than stretching the whole page, and it must not allow horizontal scrolling.
- Card Cottage's title area should stay compact: show the real Word Camp big gold star as an icon with its count, plus a single revealed/total counter such as "0/50". Do not show label chips like "大金星", "已翻开", or "待翻开" in the top area.
- Card Cottage settings must expose 50 front-image slots. Users should be able to upload, replace, delete, and drag-drop images into those slots with large, orderly controls.
- Card Cottage settings must also let the user set the deck's total card count. Keep this deck total separate from the 50 front-image slots; if the deck has more cards than filled image slots, repeat available images randomly.
- Card Cottage's built-in/default Jojo photos should appear in those front-image slots by default, so users can see, delete, or replace them from the same interface.
- Card Cottage uploaded slot images should persist through the local shared state/service so all terminals see the same deck assets.
- If fewer Card Cottage slot images are filled than the configured deck total, the visible deck should randomly repeat the available uploaded images. If none are uploaded, use the built-in Jojo reward photos as a fallback.
- Card fronts can use Jojo photos with a transparent gold frame overlay; preserve only the gold frame art, not any black background from the frame source.
- Flipping a hidden Card Cottage card costs 1 Word Camp big gold star. If no big gold star is available, block the reveal and explain that the child needs to earn a big star in Word Camp first.
- When a hidden card is tapped, it should fly out, rotate/scale up, reveal the front, return to its original slot, and then stay face-up.
- Revealed cards can open a large photo preview, but the full image must remain visible in both portrait and landscape viewports; use contain sizing, never crop it off-screen.
- A deck of unrevealed cards should feel collectible and child-facing; avoid flat admin grids.

## Art Gallery Specifics

- Art Gallery should support drag-and-drop artwork upload in the left sidebar, with a small preview shown immediately after a file is selected or dropped.
- Do not show destructive sample-clearing controls or manual sort controls in the main Art Gallery workflow unless the user explicitly asks for admin tools.
- The gallery wall should show newest artworks first.
- Artwork thumbnails should preserve each image's proportions and prioritize large visible artwork; set the card frame to the artwork ratio and fill the frame without inner padding or letterbox gaps.
- Artwork cards should stay visually quiet and even: put the date as a small overlay at the top-left of the artwork, put the title as a small overlay at the bottom-right, and do not display MiniMax calling status, long notes, or long AI analysis inside the gallery wall.
- Clicking an artwork should open a high-coverage full-screen preview using contain sizing so the complete image is visible.

## Implementation Habits

- Follow existing files and styles before adding new patterns.
- Keep changes scoped to the relevant module.
- When the user gives a new interface preference, art direction, usage constraint, or correction to a bad UI decision, update this AGENTS.md file in the same task so future agents do not repeat the mistake.
- Learning progress, generated analyses, imported word banks, gallery items, stars/rewards, app settings, and similar user-created value should persist across refreshes and across all terminals. Prefer localStorage plus the local shared state service when available.
- After frontend layout changes, verify with the browser at desktop/default and iPad-like sizes.
- If a layout regression happens because of a global rule, add a scoped override for the affected module instead of weakening the whole app.
- Preserve user data and private files. Never print API keys or other secrets in responses.
