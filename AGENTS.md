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
- Touch-first controls should feel immediate on iPad and phones. Use `touch-action: manipulation` for tappable controls and add explicit pointer/touch handling for custom critical controls instead of relying only on delayed synthetic clicks.
- Do not make compact desktop-style 38-42px controls in learning views.
- Important action buttons in learning workflows should use 18px text when space allows. If labels feel cramped, split actions into two rows instead of shrinking text.
- Use icons where they improve recognition, but never at the cost of clarity for parent-child use.
- Select menus need extra care: if using custom arrows/backgrounds, verify their height and arrow position after any size change.

## Layout Rules

- iPad landscape is the main layout target. Verify around 1024x768 and the default browser viewport when changing major screens.
- Each app should own its own settings interface. Do not put every setting into one global catch-all dialog.
- The Home settings interface owns shared API configuration such as MiniMax keys/endpoints. App-specific learning controls belong inside that app's settings entry.
- Home OSS settings should show only the OSS fields, save/status controls, and public deployment checks. Do not show a Cynadu/Prism local-config status panel or "导入本机 OSS" entry in the user-facing settings UI.
- Keep app settings near the app title bar or inside that app's workflow, with large touch-friendly buttons.
- App settings should use the unified top-right gear in the top bar. Do not add separate text settings buttons inside each module title area.
- The unified settings gear must match the neighboring top-bar visual-mode button in size, border, radius, background, and shadow.
- When the home view already has the unified gear, do not add an extra "主页设置" button inside the poster or content area.
- The home view may show a discreet app version number in the bottom-right corner of the poster; keep it small, low-contrast, and non-interactive.
- The home app version should be generated at runtime/deploy time from the app base version plus build metadata, similar to Cynadu Platform; do not manually bump only the static HTML when code changes.
- The main top-bar brand should read horizontally as "JOJO LAB · PLAY HARD, THINK SHARP." after the logo. If using a handwritten slogan asset, keep it transparent and recolor it to the current slogan color rather than embedding a mismatched background.
- On child app views, keep the unified top bar logo, replace the "JOJO LAB" wordmark with the active app name in the same uppercase wordmark style, and keep the "PLAY HARD, THINK SHARP." slogan visible in the top bar.
- On child app views, keep the unified top bar visually comfortable and vertically centered; avoid making the bar feel pinned too high or overly compressed.
- Child app section eyebrows and explanatory subtitles such as "English Songs" and "Jojo 喜欢的英文歌大模型精读" should not be shown inside the app surface; the unified top bar owns the app title.
- Child app title-bar actions, such as Song Notes "逐句朗读", should move into the unified top bar and match the neighboring visual-mode/settings buttons in border, radius, background, size, and shadow.
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

## Login / Public Access Specifics

- The public app should open behind a cartoon, touch-friendly login layer that matches the retro storybook / learning-lab style.
- While locked, keep the main app visible only as a blurred/frosted background and do not load private shared state, OSS signed URLs, song history, or progress data.
- The login UI uses four Word Camp/Card Cottage big gold star images to represent the four entered digits, with large numeric buttons suitable for iPad use.
- Login numeric buttons and backspace must work reliably by touch as well as mouse/keyboard; do not bind them with click-only handlers that can miss or double-fire on touch devices.
- Do not show visible explanatory login text such as "星星密码", subtitles, or instructions. The login surface should be primarily visual.
- When the user enters a digit, the corresponding big star should visibly break/shatter away and become the entered number.
- Login digit entry should provide a short, gentle sound cue. Backspace, wrong PIN, and successful unlock should use distinct audio feedback.
- After a correct PIN, the login surface should dissolve with a brief magic-like transition instead of disappearing instantly; the blurred main app should unfrost during that transition.
- The real app PIN is 1106 unless explicitly overridden by a local environment variable. Do not hard-code additional visible hints into the UI.
- Demo mode PIN is 8888. Demo mode starts with 6 global big gold stars, can exercise normal app flows, and must not persist changes to local shared state, OSS, Git, or server-local upload directories.
- Demo mode may use in-memory session state and browser memory, but it must not contaminate the user's real localStorage data.
- Login attempts need server-side anti-spam protection. Repeated wrong PINs should return a visible cooldown and temporarily disable input; do not rely only on frontend throttling.

## Song Notes Specifics

- "歌曲线索", "歌曲名", and "歌手 / 来源" belong together as one "歌曲信息" window.
- The MiniMax workflow should make real API errors visible. Do not show "没有找到明确候选" when the model returned an error such as invalid key, quota, model, or endpoint failure.
- Song Notes should distinguish MiniMax auth/key errors from long-request timeouts and network/proxy failures; do not collapse 401 invalid-key errors into generic VPN guidance.
- Successful song analyses must persist. A refreshed page should restore the latest analysis and expose recent analyzed songs in the Song Notes workflow.
- Song Notes should restore the latest analyzed song when opened, and song history should be exposed only as one full analyzed-song dropdown selector; do not render separate history song cards or lists in the left sidebar.
- Song Notes' left sidebar should show the full workflow without internal vertical scrolling on iPad landscape; keep song clue/title/artist in one compact row when needed.
- When a new Song Notes analysis starts, the right panel should immediately switch to the new song title and show a friendly progress state instead of leaving the previous analysis visible.
- When Song Notes analysis starts, candidate search cards must disappear completely; do not leave them above, behind, or visually competing with the analysis progress/results.
- Song Notes candidate search should also switch the right panel to the new song information and show the same friendly progress state instead of leaving the previous analysis visible.
- Song Notes candidate search and analysis are competing async workflows; stale responses from an older search or analysis must not repaint the current UI.
- If MiniMax returns non-JSON content for Song Notes, retry with a compact strict-JSON prompt; if that still fails, show a temporary learning card for the new song instead of reverting to the previous song or an empty error-only state.
- The app must not auto-generate, scrape, or display full commercial lyrics. Users should paste lyrics they own, are authorized to use, or can reasonably use for private study.
- Song Notes vocabulary extraction must include every unique meaningful English word that appears in the user-provided lyrics, including simple image/action words, repeated chorus words, and inflected surface forms. Do not skip words like sun/day/run just because they are easy.
- Ultra-basic function words should not become standalone vocabulary entries, including articles, common conjunctions, be-verbs, basic pronouns, common prepositions, auxiliaries, and filler interjections such as a/an/the/and/is/to/of/in/with/from/that/I/you/will/oh. If these words appear inside a fixed phrase, keep the phrase entry but do not add the function word alone.
- Fixed phrases, lyric-specific expressions, and slang should be added as extra vocabulary entries, but they must not replace the individual meaningful word entries inside the phrase.
- Song Notes lyric translation cards should show every relevant vocabulary item for that line. If `line.words` from the model is incomplete, supplement it from the full song `vocabulary` using `sourceLines`, `surfaceForms`, and exact word/phrase matches against the line text.
- In Song Notes lyric cards, the Chinese translation should be larger than regular explanation text and use a distinct readable color so children can quickly find it.
- Song Notes word chips inside lyric cards should use child-readable text sizes; do not make per-line vocabulary chips compact.
- Song Notes' song title/summary area should scroll together with the lyric cards in the study surface. Do not freeze the song title above a separately scrolling lyric list.
- Song Notes should not show a manual "add to Word Camp" button. Successful song analysis should automatically upsert a stable Song Notes word bank, updating an existing bank instead of creating duplicates.
- Song Notes settings should let users manage Song Notes-generated word banks, including multi-select delete, rename, and merge. These changes must update the same Word Camp word bank state.
- Song actions should be short but clear: search candidate and analyze song; Word Camp sync is automatic.

## Kana Quest Specifics

- Kana Quest should use a Word Camp-style mastery progress panel.
- The progress panel covers all kana because the total set is fixed; do not add range or daily quantity controls to Kana Quest.
- Track hiragana and katakana separately while keeping the UI simple for parent-child practice.
- Kana Quest owns its small-star progress, separate from other modules. Award 1 Kana small star only after 2 newly mastered kana; exchange 12 Kana small stars into 1 global big star. This makes kana rewards slower than Word Camp because kana questions are shorter.
- Kana Quest's prompt hint, such as "选择正确罗马音", should be large and placed beside the main kana/romaji prompt on tablet layouts, not as tiny helper text underneath. Kana answer buttons should use larger child-readable type than generic option buttons.

## Phonics Quest Specifics

- Phonics Quest has two reward concepts: challenge points for unlocking unit challenges, and its own small-star progress. Keep the labels visually distinct.
- Completing a 30-point unit challenge for the first time awards 2 Phonics small stars; exchange 6 Phonics small stars for 1 global big star. Replaying already completed units should not duplicate reward stars.
- Phonics rewards should feel comparable to Word Camp effort: harder than a few tap-through drills, but not so slow that a child cannot earn visible progress in a short session.

## Word Camp Specifics

- In "看英文选中文" mode, the optional VO follow-up setting means: play the official pronunciation at the start of each question; after the child picks the correct Chinese meaning, require the child to repeat the English word; advance only after speech recognition matches the word.
- If the child says it wrong or the app cannot hear clearly, play the official pronunciation again and ask for another repeat.
- The VO flow should not shrink buttons or crowd the exercise surface. Use clear feedback text and keep the main answer choices large.
- The VO follow-up setting should feel like part of the Word Camp settings form, not a separate bulky callout.
- In "看中文拼单词" mode, missing letters should avoid adjacent gaps whenever the word length allows it.
- In "看中文拼单词" mode, keep the word card size/proportion consistent with the other Word Camp modes; only the Chinese meaning text should use a smaller wrapping prompt style so long meanings never spill out of the card.
- Word Camp settings should edit mastery levels with compact level buttons, not a select menu; keep these rows low and comfortable for scanning.
- Word Camp settings should manage all word banks with multi-select delete, rename, and merge. It should also support adding new words and editing word meanings in editable/custom word banks, with results reflected immediately in practice and shared state.
- Word Camp exchanges 20 Word Camp small stars into 1 global big star; the title-bar small-star tray may use overlapping stars so the progress stays readable on iPad.
- Word Camp word cards should include a touch-friendly red circular control for adding/removing the current word from a persistent "重难点词库"; this special bank may contain fewer than the normal 10-word import minimum.
- Word Camp settings must keep the word bank manager visible and usable on iPad; if the full word table is long, scroll the settings content or library area instead of letting the dialog grow off-screen.
- Saving Word Camp settings must persist the currently selected word bank from the live form control and reset the daily plan when the bank changes; do not rely only on a separate select change event.
- Word Camp answer buttons and spelling keyboard controls must use touch-safe handlers and debounce correct-answer advancement so iPad touch/click synthesis or old timers cannot skip to another word before the child answers. New Word Camp questions must not inherit selected/focused/hover-highlight state from the previous question.
- Word Camp random question selection should avoid showing the exact same word twice in a row whenever more than one eligible word is available.
- Word Camp owns daily word count, VO follow-up, word bank import, word bank switching, word bank management, word mastery edits, and Word Camp small-star reset settings. Word Camp small stars exchange into global big stars; resetting Word Camp small stars must not reset global big stars.

## Card Cottage Specifics

- Card Cottage is a reward-card collection surface, not a placeholder page.
- Show unrevealed cards as tactile card objects with a real card back image, borders, thickness, and shadows.
- Keep unrevealed card faces clean: do not overlay letters, labels, or numbers on the card art.
- If card-back source art contains unwanted text, remove or repair the text in the asset itself; do not hide it by top-cropping the image.
- Card Cottage should show 4-6 cards per row depending on viewport width; avoid dense 8-card rows.
- Card Cottage must adapt beyond the iPad layout: cap the board width and card size on large desktop screens, use responsive row/height rules for non-iPad screens, and avoid oversized cards, tiny squeezed cards, or horizontal scrolling.
- The Card Cottage card grid should be vertically scrollable inside the card interface, rather than stretching the whole page, and it must not allow horizontal scrolling.
- Card Cottage's title area should stay compact: show the real global big gold star as an icon with its count, plus a single revealed/total counter such as "0/50". Do not show label chips like "大金星", "已翻开", or "待翻开" in the top area.
- Card Cottage settings must expose 50 front-image slots. Users should be able to upload, replace, delete, and drag-drop images into those slots with large, orderly controls.
- Card Cottage settings must also let the user set the deck's total card count. Keep this deck total separate from the 50 front-image slots; if the deck has more cards than filled image slots, repeat available images randomly.
- Card Cottage's built-in/default Jojo photos should appear in those front-image slots by default, so users can see, delete, or replace them from the same interface.
- Card Cottage uploaded slot images should persist through the local shared state/service so all terminals see the same deck assets.
- If fewer Card Cottage slot images are filled than the configured deck total, the visible deck should randomly repeat the available uploaded images. If none are uploaded, use the built-in Jojo reward photos as a fallback.
- Card fronts can use Jojo photos with a transparent gold frame overlay; preserve only the gold frame art, not any black background from the frame source.
- Flipping a hidden Card Cottage card costs 1 global big gold star. If no big gold star is available, block the reveal and explain that the child needs to earn a big star from any practice module first.
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
- For internet deployment, do not store newly uploaded user images in the repo, in browser-only state, or in server-local upload folders. Use the configured OSS storage for Card Cottage, Art Gallery, and custom homepage backgrounds; keep shared state limited to metadata, public URLs, and object keys.
- Homepage background presets should also be mirrored to OSS after OSS is configured. Built-in assets can remain as offline fallbacks, but the public deployment path should prefer OSS URLs for both preset and custom backgrounds.
- OSS credentials belong only in `work/private/` shared state or environment variables. Never hard-code OSS keys, never echo them in responses, and never commit them.
- Keep first-load shared state lightweight for public/tunnel access. Do not make Song Notes, home navigation, or other non-gallery views wait on large base64 gallery payloads; load large media state lazily or store media on OSS.
- Do not render media-heavy hidden subprograms such as Art Gallery or Card Cottage during home startup; hydrate them when the user opens that app so public deployments do not eagerly request OSS image grids.
- After frontend layout changes, verify with the browser at desktop/default and iPad-like sizes.
- If a layout regression happens because of a global rule, add a scoped override for the affected module instead of weakening the whole app.
- Preserve user data and private files. Never print API keys or other secrets in responses.
