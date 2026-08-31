# Keishawn Starks — Project Submission Standards & Memory

> This file is a living standard. Every project and assignment should be measured against this before submitting.
> Built from the Final Module Project: E-Commerce REST API (Coding Temple, 2026)

---

## THE SUBMISSION CHECKLIST

### 1. Code Works End-to-End
- Every endpoint tested and returning correct status codes (200, 201, 400, 404)
- No crashes, no unhandled errors
- Database reflects all changes (verify in MySQL Workbench or equivalent)
- App runs cleanly from a fresh terminal with no manual fixes needed

### 2. Postman Collection
- All endpoints saved to a named collection
- Collection exported as `.json` and included in the GitHub repo
- Requests organized in logical order: Create → Read → Update → Delete
- Bodies set to `raw / JSON` with `Content-Type: application/json`

### 3. GitHub Repository
- Clean repo — no `venv/`, no `__pycache__/`, no `.env` with secrets
- `.gitignore` in place before first commit
- Polished `README.md` includes:
  - Project description
  - Tech stack with badges
  - Database schema (visual or text diagram)
  - All endpoints in a table (method, route, description)
  - Setup instructions (clone → venv → install → DB → run)
  - Sample request bodies
  - Testing instructions (how to import Postman collection)
  - Author section with GitHub link

### 4. Portfolio Updated
- New project card added to `index.html`
- Tech stack section updated with any new tools used
- Certifications / highlights updated if a new module was completed
- Pinned repo on GitHub replaced with the newest most impressive project

### 5. Video Demo (if required)
- Under 3 minutes — no fluff, no filler
- On camera for intro and close
- Screen share for code walkthrough and live Postman demo
- MySQL Workbench (or DB tool) shown to confirm data persisted
- Flask server running BEFORE hitting record
- Postman demo practiced once before recording so clicks are smooth
- Script tight: intro → what it does → how it works → live demo → close

---

## TECHNICAL STANDARDS (REST API Projects)

### Models
- Use `DeclarativeBase`, `Mapped`, `mapped_column` (SQLAlchemy 2.0 style)
- All relationships explicitly defined with `relationship()` and `back_populates`
- Many-to-many handled via a junction `Table` (not a full model unless extra columns needed)
- Cascade deletes set on parent side: `cascade="all, delete-orphan"`
- Column names consistent — if the DB column is `userid`, the model attribute is `userid` (no mismatch)

### Schemas (Marshmallow)
- `SQLAlchemyAutoSchema` for every model
- `include_fk = True` on any schema where foreign keys need to appear in responses
- Single schema instance + `many=True` instance for every model
- Always wrap `.load()` in `try/except ValidationError`

### Endpoints
- Validate existence before operating: `if not user: return 404`
- Return the created/updated object in the response body (not just a message)
- Status codes used correctly: 201 for create, 200 for read/update/delete, 400 for bad input, 404 for not found
- DELETE returns a confirmation message with the deleted ID

### Pagination (Bonus Standard)
- Use query params: `?page=1&per_page=5`
- Read with defaults: `request.args.get('page', 1, type=int)`
- Apply with: `.limit(per_page).offset((page - 1) * per_page)`
- Add to any `GET all` endpoint

### JWT Authentication (Bonus Standard)
- Login endpoint returns `token` + `user_id`
- Protected routes require `Authorization: Bearer <token>` header
- Sensitive operations (UPDATE, DELETE user) are JWT protected

---

## DEBUGGING STANDARDS

When something breaks, work through this order:
1. Read the full error message — the answer is almost always in it
2. Check the terminal (Flask logs) not just Postman
3. Verify the virtual environment is active (`which python` should show `venv`)
4. Check imports for typos (`sqlalchemy` not `sqlachemy`)
5. Check column names match between model and code (e.g. `userid` vs `user_id`)
6. Check port conflicts (macOS AirPlay uses 5000 → use 5001)
7. If a route crashes Flask, check URL params match function parameters exactly

---

## LESSONS LOCKED IN FROM E-COMMERCE API

- `include_fk = True` on OrderSchema is required to expose `userid` in responses
- `order_product` junction table uses composite PK — duplicate prevention is automatic
- `cascade="all, delete-orphan"` must be on the parent (User) to delete child orders
- Never pass FK as constructor kwarg if the column name differs — set it as an attribute after instantiation
- Port 5000 is blocked by macOS AirPlay Receiver → always use 5001 for Flask dev
- `venv/` must be in `.gitignore` before the first commit — not after
- `git rm -r --cached venv/` removes it from tracking without deleting local files
- Auto-increment IDs never reset after deletes — note the returned ID from each POST

---

## GROWTH SCALE

| Module | Project | Score | Bonus Tasks Hit |
|--------|---------|-------|----------------|
| Relational Databases & API REST Development | E-Commerce REST API | 91.1% ✅ | Pagination ✅ · JWT Auth ✅ · Advanced Order Management ✅ |

*Update this table with every new module completed.*

---

## GRADED FEEDBACK — E-COMMERCE API (91.1%)

### What scored 100% — do this every time
- **Project Completion & Quality** — Submit ahead of schedule. Go beyond requirements. Add bonus features.
- **Code Organization & Readability** — Modular, documented, consistent naming. Code someone else can read.
- **Serialization & Input Validation** — Marshmallow on every input. No raw unvalidated data hitting the DB.
- **API Testing & Debugging** — Test every endpoint, every edge case. No errors on submission day.
- **Instructor Feedback Response** — Actively seek feedback and integrate it. This is always a free 100.

### What scored 80% — close the gaps next project
- **API Structure & Endpoints** — Refine endpoint naming. Add granular endpoints for specific resources. Think about scalability before finalizing routes.
- **Data Models & Relationships** — Make FK constraints and relationship definitions explicit and documented. Don't leave SQLAlchemy to infer — be deliberate.
- **Project Showcase (Video Demo)** — Include real-world usage scenarios and edge cases in the demo. Show what happens when something goes wrong, not just the happy path.
- **API Logic & Error Handling** — Hunt for edge cases where errors aren't handled gracefully. Add specific error messages. Consider custom exception handling.

### The instructor's exact words to remember
> "The inclusion of extra features or refinements beyond the requirements really sets your work apart."
> "Clear documentation and consistent naming conventions make it easy to follow and maintain, which is essential for collaborative development."
> "Your comprehensive testing covers all edge cases — this level of thoroughness is crucial for real-world applications."

---

**Last updated:** July 2026
**Standard set by:** E-Commerce REST API — Final Module Project, Coding Temple
