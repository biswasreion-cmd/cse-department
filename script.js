/* ================= CSE ACADEMIC PORTAL =================
   Works with the supplied index.html.
   Demo data is saved in this browser using localStorage.
   For a real multi-user university portal, connect a secured database.
=========================================================== */

const DEFAULT_DATA = {
  batches: [
    "1st Year (Session 2025-2026)",
    "Batch 1 (Session 2021-22)",
    "Batch 2 (Session 2022-23)",
    "Batch 3 (Session 2023-24)",
    "Batch 4 (Session 2024-25)"
  ],
  semesters: [
    "1st Semester", "2nd Semester", "3rd Semester", "4th Semester",
    "5th Semester", "6th Semester", "7th Semester", "8th Semester"
  ],
  teachers: [
    { id: 101, name: "Mohammad Hasan", designation: "Department Teacher", category: "department", department: "CSE", email: "", room: "", phone: "", research: "" },
    { id: 102, name: "Sujit Roy", designation: "Department Teacher", category: "department", department: "CSE", email: "", room: "", phone: "", research: "" },
    { id: 103, name: "Dr. Mahmudul Alam", designation: "Department Teacher", category: "department", department: "CSE", email: "", room: "", phone: "", research: "" },
    { id: 104, name: "Md. Humaun Kabir", designation: "Department Teacher", category: "department", department: "CSE", email: "", room: "", phone: "", research: "" },
    { id: 105, name: "Sydur Rahman", designation: "Department Teacher", category: "department", department: "CSE", email: "", room: "", phone: "", research: "" },
    { id: 106, name: "Md. Khabir Uddin Ahmed", designation: "Department Teacher", category: "department", department: "CSE", email: "", room: "", phone: "", research: "" },
    { id: 201, name: "Md. Mahfuzul Haque", designation: "Non-departmental Teacher", category: "non-departmental", department: "EEE", email: "", room: "", phone: "", research: "" },
    { id: 202, name: "Suraiya Sultana", designation: "Non-departmental Teacher", category: "non-departmental", department: "Physics", email: "", room: "", phone: "", research: "" },
    { id: 203, name: "Md. Nazmul Hossain", designation: "Non-departmental Teacher", category: "non-departmental", department: "Mathematics", email: "", room: "", phone: "", research: "" },
    { id: 204, name: "Chemistry Teacher (name to confirm)", designation: "Sample entry — replace with actual name", category: "non-departmental", department: "Chemistry", email: "", room: "", phone: "", research: "" },
    { id: 205, name: "English Teacher (name to confirm)", designation: "Sample entry — replace with actual name", category: "non-departmental", department: "English", email: "", room: "", phone: "", research: "" }
  ],
  courses: [
    { code: "CSE 1111", name: "Computer Fundamental & Professional Ethics", credit: 3, semester: "1st Semester", teacher: "Sydur Rahman", syllabus: [] },
    { code: "CSE 1112", name: "Computer Fundamental Sessional", credit: 1.5, semester: "1st Semester", teacher: "Sujit Roy", syllabus: [] },
    { code: "CSE 1121", name: "Structure Programming", credit: 3, semester: "1st Semester", teacher: "Mohammad Hasan", syllabus: [] },
    { code: "CSE 1122", name: "Structure Programming Sessional", credit: 1.5, semester: "1st Semester", teacher: "Mohammad Hasan", syllabus: [] },
    { code: "CSE 1131", name: "Basic Electrical Engineering", credit: 3, semester: "1st Semester", teacher: "Md. Mahfuzul Haque", syllabus: [] },
    { code: "CSE 1132", name: "Basic Electrical Engineering Sessional", credit: 1, semester: "1st Semester", teacher: "Md. Mahfuzul Haque", syllabus: [] },
    { code: "PHY 1111", name: "Physics", credit: 3, semester: "1st Semester", teacher: "Suraiya Sultana", syllabus: [] },
    { code: "MAT 1111", name: "Calculus and Coordinate Geometry", credit: 3, semester: "1st Semester", teacher: "Md. Nazmul Hossain", syllabus: [] }
  ],
  routines: [
    { id: 1001, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Sunday", time: "10:00 AM - 11:00 AM", course: "CSE 1111", teacher: "Sydur Rahman", room: "L3 (Room 112)" },
    { id: 1002, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Sunday", time: "11:00 AM - 12:00 PM", course: "CSE 1111", teacher: "Sydur Rahman", room: "L3 (Room 112)" },
    { id: 1003, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Sunday", time: "12:00 PM - 01:00 PM", course: "MAT 1111", teacher: "Md. Nazmul Hossain", room: "L5 (Room 117)" },
    { id: 1004, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Sunday", time: "01:15 PM - 02:15 PM", course: "CSE 1121", teacher: "Mohammad Hasan", room: "L3 (Room 112)" },
    { id: 1005, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Sunday", time: "02:15 PM - 03:15 PM", course: "CSE 1121", teacher: "Mohammad Hasan", room: "L3 (Room 112)" },
    { id: 1006, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Monday", time: "10:00 AM - 11:00 AM", course: "CSE 1112", teacher: "Sujit Roy", room: "L3 (Room 112)" },
    { id: 1007, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Monday", time: "11:00 AM - 12:00 PM", course: "CSE 1112", teacher: "Sujit Roy", room: "L3 (Room 112)" },
    { id: 1008, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Monday", time: "12:00 PM - 01:00 PM", course: "CSE 1112", teacher: "Sujit Roy", room: "L3 (Room 112)" },
    { id: 1009, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Monday", time: "01:15 PM - 02:15 PM", course: "CSE 1131", teacher: "Md. Mahfuzul Haque", room: "L3 (Room 112)" },
    { id: 1010, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Tuesday", time: "11:00 AM - 12:00 PM", course: "CSE 1131", teacher: "Md. Mahfuzul Haque", room: "L3 (Room 112)" },
    { id: 1011, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Tuesday", time: "12:00 PM - 01:00 PM", course: "PHY 1111", teacher: "Suraiya Sultana", room: "L3 (Room 112)" },
    { id: 1012, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Tuesday", time: "01:15 PM - 02:15 PM", course: "MAT 1111", teacher: "Md. Nazmul Hossain", room: "L3 (Room 112)" },
    { id: 1013, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Tuesday", time: "02:15 PM - 03:15 PM", course: "MAT 1111", teacher: "Md. Nazmul Hossain", room: "L3 (Room 112)" },
    { id: 1014, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Wednesday", time: "10:00 AM - 11:00 AM", course: "PHY 1111", teacher: "Suraiya Sultana", room: "L3 (Room 112)" },
    { id: 1015, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Wednesday", time: "11:00 AM - 12:00 PM", course: "PHY 1111", teacher: "Suraiya Sultana", room: "L3 (Room 112)" },
    { id: 1016, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Wednesday", time: "12:00 PM - 01:00 PM", course: "CSE 1131", teacher: "Md. Mahfuzul Haque", room: "EL2 (Room 111)" },
    { id: 1017, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Wednesday", time: "01:15 PM - 02:15 PM", course: "CSE 1132", teacher: "Md. Mahfuzul Haque", room: "EL2 (Room 111)" },
    { id: 1018, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Wednesday", time: "02:15 PM - 03:15 PM", course: "CSE 1132", teacher: "Md. Mahfuzul Haque", room: "EL2 (Room 111)" },
    { id: 1019, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Thursday", time: "10:00 AM - 11:00 AM", course: "CSE 1121", teacher: "Mohammad Hasan", room: "L1 (Room 108)" },
    { id: 1020, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Thursday", time: "11:00 AM - 12:00 PM", course: "CSE 1122", teacher: "Mohammad Hasan", room: "L1 (Room 108)" },
    { id: 1021, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Thursday", time: "12:00 PM - 01:00 PM", course: "CSE 1122", teacher: "Mohammad Hasan", room: "L1 (Room 108)" },
    { id: 1022, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Thursday", time: "01:15 PM - 02:15 PM", course: "CSE 1122", teacher: "Mohammad Hasan", room: "L1 (Room 108)" },
    { id: 1023, batch: "1st Year (Session 2025-2026)", semester: "1st Semester", day: "Thursday", time: "02:15 PM - 03:15 PM", course: "CSE 1111", teacher: "Sydur Rahman", room: "L1 (Room 108)" }
  ],
  notices: [
    { id: 1, title: "Mid-Term Examination Schedule - Fall 2026", date: "2026-10-01", category: "Exam", description: "The mid-term exams will commence from October 15. All students are advised to check their schedules." },
    { id: 2, title: "Lab Class Cancellation Notice", date: "2026-10-03", category: "Class", description: "CSE 201 Lab session for Batch 2 on Sunday is rescheduled to Monday afternoon." }
  ],
  rooms: [
    { roomNo: "Room 109", type: "Classroom", capacity: null, building: "Room details can be updated by admin" },
    { roomNo: "Room 110", type: "Classroom / Lab (confirm type)", capacity: null, building: "Room details can be updated by admin" },
    { roomNo: "Room 111", type: "Classroom / Lab (confirm type)", capacity: null, building: "Room details can be updated by admin" },
    { roomNo: "Room 112", type: "Classroom", capacity: null, building: "Room details can be updated by admin" },
    { roomNo: "Room 113", type: "Classroom / Lab (confirm type)", capacity: null, building: "Room details can be updated by admin" },
    { roomNo: "Room 114", type: "Classroom", capacity: null, building: "Room details can be updated by admin" },
    { roomNo: "Room 115", type: "Classroom", capacity: null, building: "Room details can be updated by admin" },
    { roomNo: "Room 116", type: "Classroom", capacity: null, building: "Room details can be updated by admin" },
    { roomNo: "Room 117", type: "Classroom", capacity: null, building: "Room details can be updated by admin" },
    { roomNo: "L1 (Room 108)", type: "Theory Classroom", capacity: 60, building: "Room code from draft routine" },
    { roomNo: "L3 (Room 112)", type: "Theory Classroom", capacity: 60, building: "Room code from draft routine" },
    { roomNo: "L5 (Room 117)", type: "Theory Classroom", capacity: 60, building: "Room code from draft routine" },
    { roomNo: "EL2 (Room 111)", type: "Electrical Engineering Lab", capacity: 40, building: "Room code from draft routine" }
  ]
};
const STORAGE_KEY = "cseAcademicPortalData";
let appData = loadAppData();
let currentActiveBatch = appData.batches[0] || "";
let editingRoutineId = null;
let editingTeacherId = null;
let editingCourseCode = null;
let currentTeacherCategory = "department";

function loadAppData() {
  let savedData = {};
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) savedData = JSON.parse(saved) || {};
  } catch (error) {
    console.warn("Could not load saved portal data:", error);
  }
  const data = { ...structuredClone(DEFAULT_DATA), ...savedData };
  data.batches = [...new Set([...(DEFAULT_DATA.batches || []), ...(savedData.batches || [])])];
  data.semesters = [...new Set([...(DEFAULT_DATA.semesters || []), ...(savedData.semesters || [])])];
  const categoryByName = new Map(DEFAULT_DATA.teachers.map(t => [t.name.toLowerCase(), t.category]));
  const teacherMap = new Map();
  for (const teacher of [...(savedData.teachers || []), ...DEFAULT_DATA.teachers]) {
    const key = String(teacher.name || "").trim().toLowerCase();
    if (!key) continue;
    const previous = teacherMap.get(key) || {};
    teacherMap.set(key, {
      ...teacher,
      ...previous,
      id: previous.id ?? teacher.id ?? Date.now(),
      category: categoryByName.get(key) || previous.category || teacher.category || "non-departmental",
      department: previous.department || teacher.department || ""
    });
  }
  data.teachers = [...teacherMap.values()];
  const courseMap = new Map();
  for (const course of [...(savedData.courses || []), ...DEFAULT_DATA.courses]) {
    const key = String(course.code || "").trim().toLowerCase();
    if (key) courseMap.set(key, { ...courseMap.get(key), ...course });
  }
  data.courses = [...courseMap.values()];
  const routineMap = new Map();
  for (const routine of [...(savedData.routines || []), ...DEFAULT_DATA.routines]) {
    const key = [routine.batch, routine.semester, routine.day, routine.time, routine.course].join("|").toLowerCase();
    if (key) routineMap.set(key, { ...routineMap.get(key), ...routine });
  }
  data.routines = [...routineMap.values()];
  data.notices = savedData.notices || data.notices || [];
  data.rooms = [...(savedData.rooms || []), ...DEFAULT_DATA.rooms].filter((room, index, all) => all.findIndex(r => r.roomNo === room.roomNo) === index);
  return data;
}

function saveAppData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  } catch (error) {
    alert("Data could not be saved in this browser.");
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ensureAdminTabs();
  initFilters();
  renderHomePage();
  renderRoutineTable();
  renderBatches();
  renderCourses();
  renderTeachers();
  renderRooms();
  renderNotices();
  initDashboard();
  saveAppData();
});

function ensureAdminTabs() {
  const tabs = document.querySelector(".admin-tabs");
  if (!tabs) return;
  tabs.querySelectorAll('[onclick*="switchAdminTab(\'teachers\')"]').forEach(button => button.remove());
  const wanted = [
    ["departmentTeachers", "Department Teachers"],
    ["nonDepartmentTeachers", "Non-Department Teachers"]
  ];
  const noticesButton = tabs.querySelector('[onclick*="notices"]');
  wanted.forEach(([key, label]) => {
    if (!tabs.querySelector(`[onclick*="'${key}'"]`)) {
      const button = document.createElement("button");
      button.className = "tab-btn";
      button.type = "button";
      button.textContent = label;
      button.setAttribute("onclick", `switchAdminTab('${key}')`);
      tabs.insertBefore(button, noticesButton || null);
    }
  });
}

function navigateTo(pageId) {
  document.querySelectorAll(".page-section").forEach(section => section.classList.add("hidden"));
  const page = document.getElementById(`page-${pageId}`);
  if (page) page.classList.remove("hidden");

  document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
  const activeLink = document.querySelector(`.nav-link[onclick*="navigateTo('${pageId}')"]`);
  if (activeLink) activeLink.classList.add("active");

  if (pageId === "routine") renderRoutineTable();
  if (pageId === "admin") switchAdminTab("routine");
  if (pageId === "dashboard") updateDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* HOME */
function renderHomePage() {
  const classes = document.getElementById("homeTodayClasses");
  if (classes) {
    classes.innerHTML = appData.routines.slice(0, 3).map(r => `
      <div class="card">
        <span class="badge">${escapeHTML(r.time)}</span>
        <h3>${escapeHTML(r.course)}</h3>
        <p><strong>Day:</strong> ${escapeHTML(r.day)}</p>
        <p><strong>Teacher:</strong> ${escapeHTML(r.teacher)}</p>
        <p><strong>Location:</strong> ${escapeHTML(r.room)}</p>
        <small>${escapeHTML(r.batch)} (${escapeHTML(r.semester)})</small>
      </div>`).join("") || "<p>No classes have been added yet.</p>";
  }
  const notices = document.getElementById("homeNoticeList");
  if (notices) {
    notices.innerHTML = appData.notices.slice().reverse().slice(0, 3).map(n => `
      <div class="card">
        <small>${escapeHTML(n.category)} | ${escapeHTML(n.date)}</small>
        <h3>${escapeHTML(n.title)}</h3>
        <p>${escapeHTML(n.description)}</p>
      </div>`).join("") || "<p>No notices available.</p>";
  }
}

/* ROUTINE FILTERS AND TABLE */
function initFilters() {
  const batchSelect = document.getElementById("routineFilterBatch");
  const semesterSelect = document.getElementById("routineFilterSemester");
  if (batchSelect) {
    batchSelect.innerHTML = `<option value="ALL">All Batches</option>` +
      appData.batches.map(b => `<option value="${escapeHTML(b)}">${escapeHTML(b)}</option>`).join("");
  }
  if (semesterSelect) {
    semesterSelect.innerHTML = `<option value="ALL">All Semesters</option>` +
      appData.semesters.map(s => `<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join("");
  }
}

function renderRoutineTable() {
  const tbody = document.getElementById("routineTableBody");
  if (!tbody) return;
  const batchValue = document.getElementById("routineFilterBatch")?.value || "ALL";
  const semesterValue = document.getElementById("routineFilterSemester")?.value || "ALL";
  const dayValue = document.getElementById("routineFilterDay")?.value || "ALL";

  const rows = appData.routines.filter(r =>
    (batchValue === "ALL" || r.batch === batchValue) &&
    (semesterValue === "ALL" || r.semester === semesterValue) &&
    (dayValue === "ALL" || r.day === dayValue)
  );

  tbody.innerHTML = rows.length ? rows.map(r => `
    <tr>
      <td><strong>${escapeHTML(r.day)}</strong></td>
      <td>${escapeHTML(r.time)}</td>
      <td><strong>${escapeHTML(r.course)}</strong></td>
      <td>${escapeHTML(r.teacher)}</td>
      <td>${escapeHTML(r.room)}</td>
      <td>${escapeHTML(r.batch)}<br><small>${escapeHTML(r.semester)}</small></td>
    </tr>`).join("") :
    `<tr><td colspan="6" style="text-align:center;padding:20px;">No routines found matching these filters.</td></tr>`;
}

/* BATCHES */
function renderBatches() {
  const container = document.getElementById("batchTabsContainer");
  if (!container) return;
  container.innerHTML = appData.batches.map(b => `
    <button class="batch-btn ${b === currentActiveBatch ? "active" : ""}"
      onclick="selectBatch('${escapeJS(b)}')">${escapeHTML(b)}</button>`).join("");
  renderSemesters();
}
function selectBatch(batchName) {
  currentActiveBatch = batchName;
  renderBatches();
}
function renderSemesters() {
  const container = document.getElementById("semesterGridContainer");
  if (!container) return;
  container.innerHTML = appData.semesters.map(semester => {
    const courses = appData.courses.filter(c => c.semester === semester);
    return `<div class="card">
      <h3>${escapeHTML(semester)}</h3>
      <p><small>${escapeHTML(currentActiveBatch)}</small></p>
      <hr>
      <p><strong>Courses (${courses.length}):</strong></p>
      <ul>${courses.map(c => `<li>${escapeHTML(c.code)}: ${escapeHTML(c.name)}</li>`).join("") || "<li>No courses assigned</li>"}</ul>
    </div>`;
  }).join("");
}

/* COURSES */
function renderCourses() {
  const container = document.getElementById("coursesListContainer");
  if (!container) return;
  container.innerHTML = appData.courses.map(c => `
    <div class="card">
      <span class="badge">Credit: ${escapeHTML(String(c.credit))}</span>
      <h3>${escapeHTML(c.code)} - ${escapeHTML(c.name)}</h3>
      <p><strong>Instructor:</strong> ${escapeHTML(c.teacher)}</p>
      <p><small>Target: ${escapeHTML(c.semester)}</small></p>
      <button class="btn btn-primary" onclick="viewSyllabus('${escapeJS(c.code)}')">View Syllabus</button>
    </div>`).join("") || "<p>No courses have been added.</p>";
}
function viewSyllabus(courseCode) {
  const course = appData.courses.find(c => c.code === courseCode);
  if (!course) return;
  openModal(`<h2>${escapeHTML(course.code)}: ${escapeHTML(course.name)}</h2>
    <p><strong>Credits:</strong> ${escapeHTML(String(course.credit))} | <strong>Teacher:</strong> ${escapeHTML(course.teacher)}</p>
    <hr><h3>Detailed Syllabus Topics</h3>
    <ol>${(course.syllabus || []).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ol>`);
}

/* TEACHERS */
function renderTeachers(filter = "") {
  const container = document.getElementById("teachersGrid");
  if (!container) return;
  const query = filter.toLowerCase();
  const matching = appData.teachers.filter(t =>
    t.name.toLowerCase().includes(query) ||
    t.designation.toLowerCase().includes(query) ||
    String(t.department || "").toLowerCase().includes(query)
  );
  const renderGroup = (category, title) => {
    const group = matching.filter(t => (t.category || "non-departmental") === category);
    return `<div class="teacher-category-group" style="grid-column:1/-1"><h3>${title} (${group.length})</h3></div>` + group.map(t => `
      <div class="card teacher-card">
        <div class="teacher-avatar"><i class="fa-solid fa-user-tie"></i></div>
        <h3>${escapeHTML(t.name)}</h3>
        <p>${escapeHTML(t.designation)}</p>
        <p><strong>Department:</strong> ${escapeHTML(t.department || "Not specified")}</p>
        ${t.email ? `<p><i class="fa-solid fa-envelope"></i> ${escapeHTML(t.email)}</p>` : ""}
        ${t.room ? `<p><i class="fa-solid fa-location-dot"></i> ${escapeHTML(t.room)}</p>` : ""}
        <button class="btn btn-secondary" onclick="viewTeacherSchedule('${escapeJS(t.name)}')">Weekly Schedule</button>
      </div>`).join("");
  };
  container.innerHTML = renderGroup("department", "Department Teachers") + renderGroup("non-departmental", "Non-Departmental Course Teachers");
}
function filterTeachers(value) { renderTeachers(value); }
function viewTeacherSchedule(teacherName) {
  const schedules = appData.routines.filter(r => r.teacher === teacherName);
  openModal(`<h2>Class Schedule: ${escapeHTML(teacherName)}</h2><hr>
    ${schedules.length ? `<ul>${schedules.map(r => `<li><strong>${escapeHTML(r.day)} (${escapeHTML(r.time)})</strong><br>${escapeHTML(r.course)} - ${escapeHTML(r.room)}<br>${escapeHTML(r.batch)} / ${escapeHTML(r.semester)}</li>`).join("")}</ul>` : "<p>No classes scheduled for this teacher.</p>"}`);
}

/* ROOMS */
function renderRooms() {
  const container = document.getElementById("roomsGrid");
  if (!container) return;
  container.innerHTML = appData.rooms.map(r => `
    <div class="card">
      <h3><i class="fa-solid fa-door-closed"></i> ${escapeHTML(r.roomNo)}</h3>
      <p><strong>Type:</strong> ${escapeHTML(r.type)}</p>
      <p><strong>Capacity:</strong> ${r.capacity == null ? "Not specified" : `${escapeHTML(String(r.capacity))} seats`}</p>
      <p><small>${escapeHTML(r.building)}</small></p>
    </div>`).join("");
}

/* NOTICES */
function renderNotices() {
  const container = document.getElementById("noticesFullGrid");
  if (!container) return;
  container.innerHTML = appData.notices.slice().reverse().map(n => `
    <div class="card">
      <span class="badge">${escapeHTML(n.category)}</span>
      <small style="float:right">${escapeHTML(n.date)}</small>
      <h3>${escapeHTML(n.title)}</h3>
      <p>${escapeHTML(n.description)}</p>
    </div>`).join("") || "<p>No notices available.</p>";
}

/* STUDENT DASHBOARD */
function initDashboard() {
  const batchSelect = document.getElementById("dashBatchSelect");
  const semesterSelect = document.getElementById("dashSemesterSelect");
  if (batchSelect) batchSelect.innerHTML = appData.batches.map(b => `<option value="${escapeHTML(b)}">${escapeHTML(b)}</option>`).join("");
  if (semesterSelect) semesterSelect.innerHTML = appData.semesters.map(s => `<option value="${escapeHTML(s)}">${escapeHTML(s)}</option>`).join("");
  updateDashboard();
}
function updateDashboard() {
  const batch = document.getElementById("dashBatchSelect")?.value;
  const semester = document.getElementById("dashSemesterSelect")?.value;
  const container = document.getElementById("dashboardContent");
  if (!container || !batch || !semester) return;
  const routines = appData.routines.filter(r => r.batch === batch && r.semester === semester);
  const courses = appData.courses.filter(c => c.semester === semester);
  container.innerHTML = `<div class="dashboard-grid">
    <div class="card"><h3>My Enrolled Courses (${courses.length})</h3><ul>
      ${courses.map(c => `<li><strong>${escapeHTML(c.code)}:</strong> ${escapeHTML(c.name)} (${escapeHTML(c.teacher)})</li>`).join("") || "<li>No courses found.</li>"}
    </ul></div>
    <div class="card"><h3>My Weekly Routine (${routines.length} classes)</h3><ul>
      ${routines.map(r => `<li><strong>${escapeHTML(r.day)} (${escapeHTML(r.time)}):</strong> ${escapeHTML(r.course)} @ ${escapeHTML(r.room)}</li>`).join("") || "<li>No classes scheduled.</li>"}
    </ul></div>
  </div>`;
}

/* ADMIN TABS */
function switchAdminTab(tab) {
  const container = document.getElementById("adminTabContent");
  if (!container) return;
  ensureAdminTabs();
  document.querySelectorAll(".admin-tabs .tab-btn").forEach(button => {
    button.classList.toggle("active", button.getAttribute("onclick")?.includes(`'${tab}'`));
  });

  if (tab === "routine") {
    container.innerHTML = `
      <div class="card admin-form-card">
        <h3>${editingRoutineId === null ? "Add Class Routine" : "Edit Class Routine"}</h3>
        <form id="routineAdminForm" onsubmit="saveRoutine(event)">
          <div class="form-grid">
            <div class="filter-group"><label for="routineBatch">Batch</label><select id="routineBatch" required>${appData.batches.map(b => `<option>${escapeHTML(b)}</option>`).join("")}</select></div>
            <div class="filter-group"><label for="routineSemester">Semester</label><select id="routineSemester" required>${appData.semesters.map(s => `<option>${escapeHTML(s)}</option>`).join("")}</select></div>
            <div class="filter-group"><label for="routineDay">Day</label><select id="routineDay" required>${["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"].map(d => `<option>${d}</option>`).join("")}</select></div>
            <div class="filter-group"><label for="routineTime">Time</label><input class="form-input" id="routineTime" placeholder="09:00 AM - 10:30 AM" required></div>
            <div class="filter-group"><label for="routineCourse">Course code/name</label><input class="form-input" id="routineCourse" placeholder="CSE 101" required list="courseNames"><datalist id="courseNames">${appData.courses.map(c => `<option value="${escapeHTML(c.code)}">`).join("")}</datalist></div>
            <div class="filter-group"><label for="routineTeacher">Teacher</label><input class="form-input" id="routineTeacher" placeholder="Teacher name" required list="teacherNames"><datalist id="teacherNames">${appData.teachers.map(t => `<option value="${escapeHTML(t.name)}">`).join("")}</datalist></div>
            <div class="filter-group"><label for="routineRoom">Room</label><input class="form-input" id="routineRoom" placeholder="Room 301 / Lab 2" required></div>
          </div>
          <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap"><button class="btn btn-primary" type="submit">${editingRoutineId === null ? "Save Routine" : "Update Routine"}</button><button class="btn btn-secondary" type="button" onclick="cancelRoutineEdit()">Clear Form</button></div>
        </form>
      </div>
      <div class="card" style="margin-top:20px"><h3>Saved Routines (${appData.routines.length})</h3><div class="table-responsive"><table class="data-table"><thead><tr><th>Day</th><th>Time</th><th>Course</th><th>Batch / Semester</th><th>Teacher</th><th>Room</th><th>Actions</th></tr></thead><tbody>
      ${appData.routines.map(r => `<tr><td>${escapeHTML(r.day)}</td><td>${escapeHTML(r.time)}</td><td>${escapeHTML(r.course)}</td><td>${escapeHTML(r.batch)}<br>${escapeHTML(r.semester)}</td><td>${escapeHTML(r.teacher)}</td><td>${escapeHTML(r.room)}</td><td><button class="btn btn-secondary" type="button" onclick="editRoutine(${r.id})">Edit</button> <button class="btn btn-danger" type="button" onclick="deleteRoutine(${r.id})">Delete</button></td></tr>`).join("") || '<tr><td colspan="7">No routines added yet.</td></tr>'}
      </tbody></table></div></div>`;
    if (editingRoutineId !== null) fillRoutineForm(editingRoutineId);
  } else if (tab === "courses") {
    container.innerHTML = `
      <div class="card"><h3>${editingCourseCode === null ? "Add Course" : "Edit Course"}</h3>
        <form onsubmit="saveCourse(event)"><div class="form-grid">
          <div class="filter-group"><label>Course code</label><input class="form-input" id="newCourseCode" required placeholder="CSE 101" ${editingCourseCode !== null ? "readonly" : ""}></div>
          <div class="filter-group"><label>Course name</label><input class="form-input" id="newCourseName" required placeholder="Structured Programming"></div>
          <div class="filter-group"><label>Credit</label><input class="form-input" id="newCourseCredit" type="number" min="0" step="0.5" required value="3"></div>
          <div class="filter-group"><label>Semester</label><select id="newCourseSemester">${appData.semesters.map(s => `<option>${escapeHTML(s)}</option>`).join("")}</select></div>
          <div class="filter-group"><label>Teacher</label><input class="form-input" id="newCourseTeacher" required list="courseTeacherNames"><datalist id="courseTeacherNames">${appData.teachers.map(t => `<option value="${escapeHTML(t.name)}">`).join("")}</datalist></div>
          <div class="filter-group"><label>Syllabus topics (comma-separated)</label><input class="form-input" id="newCourseSyllabus" placeholder="Variables, Loops, Functions"></div>
        </div><button class="btn btn-primary" type="submit" style="margin-top:12px">${editingCourseCode === null ? "Add Course" : "Update Course"}</button> ${editingCourseCode !== null ? '<button class="btn btn-secondary" type="button" onclick="cancelCourseEdit()">Cancel</button>' : ""}</form>
      </div>
      <div class="card" style="margin-top:20px"><h3>Current Courses (${appData.courses.length})</h3><div class="table-responsive"><table class="data-table"><thead><tr><th>Code</th><th>Name</th><th>Credit</th><th>Semester</th><th>Teacher</th><th>Actions</th></tr></thead><tbody>
      ${appData.courses.map(c => `<tr><td>${escapeHTML(c.code)}</td><td>${escapeHTML(c.name)}</td><td>${escapeHTML(String(c.credit))}</td><td>${escapeHTML(c.semester)}</td><td>${escapeHTML(c.teacher)}</td><td><button class="btn btn-secondary" type="button" onclick="editCourse('${escapeJS(c.code)}')">Edit</button> <button class="btn btn-danger" type="button" onclick="deleteCourse('${escapeJS(c.code)}')">Delete</button></td></tr>`).join("") || '<tr><td colspan="6">No courses added yet.</td></tr>'}
      </tbody></table></div></div>`;
    if (editingCourseCode !== null) fillCourseForm(editingCourseCode);
  } else if (tab === "teachers" || tab === "departmentTeachers" || tab === "nonDepartmentTeachers") {
    currentTeacherCategory = tab === "nonDepartmentTeachers" ? "non-departmental" : "department";
    const visibleTeachers = appData.teachers.filter(t => (t.category || "non-departmental") === currentTeacherCategory);
    const teacherGroupTitle = currentTeacherCategory === "department" ? "Department Teachers" : "Non-Departmental Course Teachers";
    container.innerHTML = `
      <div class="card"><h3>${editingTeacherId === null ? "Add Teacher" : "Edit Teacher"} — ${teacherGroupTitle}</h3>
        <form onsubmit="saveTeacher(event)"><div class="form-grid">
          <div class="filter-group"><label>Teacher name</label><input class="form-input" id="teacherName" required placeholder="Teacher full name"></div>
          <div class="filter-group"><label>Designation</label><input class="form-input" id="teacherDesignation" required placeholder="Lecturer / Assistant Professor"></div>
          <div class="filter-group"><label>Department / Subject</label><input class="form-input" id="teacherDepartment" placeholder="CSE / EEE / Physics / Mathematics"></div>
          <div class="filter-group"><label>Email</label><input class="form-input" id="teacherEmail" type="email" placeholder="teacher@university.edu"></div>
          <div class="filter-group"><label>Room</label><input class="form-input" id="teacherRoom" placeholder="Room 401"></div>
          <div class="filter-group"><label>Phone</label><input class="form-input" id="teacherPhone" placeholder="Phone number"></div>
          <div class="filter-group"><label>Research interests</label><input class="form-input" id="teacherResearch" placeholder="AI, Data Science"></div>
        </div><button class="btn btn-primary" type="submit">${editingTeacherId === null ? "Save Teacher" : "Update Teacher"}</button> ${editingTeacherId !== null ? '<button class="btn btn-secondary" type="button" onclick="cancelTeacherEdit()">Cancel</button>' : ""}</form>
      </div>
      <div class="card" style="margin-top:20px"><h3>${teacherGroupTitle} (${visibleTeachers.length})</h3><div class="table-responsive"><table class="data-table"><thead><tr><th>Name</th><th>Designation</th><th>Department/Subject</th><th>Email</th><th>Room</th><th>Actions</th></tr></thead><tbody>
      ${visibleTeachers.map(t => `<tr><td>${escapeHTML(t.name)}</td><td>${escapeHTML(t.designation)}</td><td>${escapeHTML(t.department || "")}</td><td>${escapeHTML(t.email || "")}</td><td>${escapeHTML(t.room || "")}</td><td><button class="btn btn-secondary" type="button" onclick="editTeacher(${t.id})">Edit</button> <button class="btn btn-danger" type="button" onclick="deleteTeacher(${t.id})">Delete</button></td></tr>`).join("") || '<tr><td colspan="6">No teachers added yet.</td></tr>'}
      </tbody></table></div></div>`;
    if (editingTeacherId !== null) fillTeacherForm(editingTeacherId);
  } else if (tab === "notices") {
    container.innerHTML = `<div class="card"><h3>Add Academic Notice</h3><form onsubmit="addNotice(event)"><div class="form-grid">
      <div class="filter-group"><label>Notice title</label><input class="form-input" id="noticeTitle" required></div>
      <div class="filter-group"><label>Date</label><input class="form-input" id="noticeDate" type="date" required></div>
      <div class="filter-group"><label>Category</label><select id="noticeCategory"><option>General</option><option>Exam</option><option>Class</option><option>Holiday</option></select></div>
      <div class="filter-group"><label>Description</label><textarea class="form-input" id="noticeDescription" required></textarea></div>
      </div><button class="btn btn-primary" type="submit" style="margin-top:12px">Publish Notice</button></form></div>
      <div class="card" style="margin-top:20px"><h3>Current Notices</h3>${appData.notices.map(n => `<p><strong>${escapeHTML(n.title)}</strong> — ${escapeHTML(n.date)}</p>`).join("")}</div>`;
  }
}

function saveRoutine(event) {
  event.preventDefault();
  const routine = {
    id: editingRoutineId === null ? Date.now() : editingRoutineId,
    batch: document.getElementById("routineBatch").value,
    semester: document.getElementById("routineSemester").value,
    day: document.getElementById("routineDay").value,
    time: document.getElementById("routineTime").value.trim(),
    course: document.getElementById("routineCourse").value.trim(),
    teacher: document.getElementById("routineTeacher").value.trim(),
    room: document.getElementById("routineRoom").value.trim()
  };
  if (Object.values(routine).some(value => value === "")) {
    alert("Please fill in every field.");
    return;
  }
  if (editingRoutineId === null) appData.routines.push(routine);
  else appData.routines = appData.routines.map(r => r.id === editingRoutineId ? routine : r);

  saveAppData();
  editingRoutineId = null;
  initFilters();
  renderRoutineTable();
  renderHomePage();
  renderTeachers();
  updateDashboard();
  switchAdminTab("routine");
  alert("Routine saved successfully!");
}
function editRoutine(id) {
  editingRoutineId = id;
  switchAdminTab("routine");
}
function fillRoutineForm(id) {
  const routine = appData.routines.find(r => r.id === id);
  if (!routine) return;
  const fields = {
    routineBatch: routine.batch, routineSemester: routine.semester, routineDay: routine.day,
    routineTime: routine.time, routineCourse: routine.course, routineTeacher: routine.teacher,
    routineRoom: routine.room
  };
  Object.entries(fields).forEach(([fieldId, value]) => {
    const field = document.getElementById(fieldId);
    if (field) field.value = value;
  });
}
function cancelRoutineEdit() {
  editingRoutineId = null;
  switchAdminTab("routine");
}
function deleteRoutine(id) {
  if (!confirm("Are you sure you want to delete this routine?")) return;
  appData.routines = appData.routines.filter(r => r.id !== id);
  saveAppData();
  renderRoutineTable();
  renderHomePage();
  updateDashboard();
  switchAdminTab("routine");
}
function saveCourse(event) {
  event.preventDefault();
  const code = document.getElementById("newCourseCode").value.trim();
  const course = {
    code,
    name: document.getElementById("newCourseName").value.trim(),
    credit: Number(document.getElementById("newCourseCredit").value),
    semester: document.getElementById("newCourseSemester").value,
    teacher: document.getElementById("newCourseTeacher").value.trim(),
    syllabus: document.getElementById("newCourseSyllabus").value.split(",").map(s => s.trim()).filter(Boolean)
  };
  if (editingCourseCode === null && appData.courses.some(c => c.code.toLowerCase() === code.toLowerCase())) {
    alert("This course code already exists."); return;
  }
  if (editingCourseCode === null) appData.courses.push(course);
  else appData.courses = appData.courses.map(c => c.code === editingCourseCode ? course : c);
  editingCourseCode = null;
  saveAppData(); renderCourses(); renderBatches(); updateDashboard();
  switchAdminTab("courses"); alert("Course saved successfully!");
}
function editCourse(code) { editingCourseCode = code; switchAdminTab("courses"); }
function fillCourseForm(code) {
  const c = appData.courses.find(item => item.code === code); if (!c) return;
  document.getElementById("newCourseCode").value = c.code;
  document.getElementById("newCourseName").value = c.name;
  document.getElementById("newCourseCredit").value = c.credit;
  document.getElementById("newCourseSemester").value = c.semester;
  document.getElementById("newCourseTeacher").value = c.teacher;
  document.getElementById("newCourseSyllabus").value = (c.syllabus || []).join(", ");
}
function cancelCourseEdit() { editingCourseCode = null; switchAdminTab("courses"); }
function deleteCourse(code) {
  if (!confirm(`Delete course ${code}?`)) return;
  appData.courses = appData.courses.filter(c => c.code !== code);
  saveAppData(); renderCourses(); renderBatches(); updateDashboard(); switchAdminTab("courses");
}
function saveTeacher(event) {
  event.preventDefault();
  const teacher = {
    id: editingTeacherId === null ? Date.now() : editingTeacherId,
    name: document.getElementById("teacherName").value.trim(),
    designation: document.getElementById("teacherDesignation").value.trim(),
    category: currentTeacherCategory,
    department: document.getElementById("teacherDepartment").value.trim(),
    email: document.getElementById("teacherEmail").value.trim(),
    room: document.getElementById("teacherRoom").value.trim(),
    phone: document.getElementById("teacherPhone").value.trim(),
    research: document.getElementById("teacherResearch").value.trim()
  };
  if (editingTeacherId === null && appData.teachers.some(t => t.name.toLowerCase() === teacher.name.toLowerCase())) { alert("This teacher already exists."); return; }
  if (editingTeacherId === null) appData.teachers.push(teacher);
  else {
    const old = appData.teachers.find(t => t.id === editingTeacherId);
    if (old && old.name !== teacher.name) {
      appData.routines.forEach(r => { if (r.teacher === old.name) r.teacher = teacher.name; });
      appData.courses.forEach(c => { if (c.teacher === old.name) c.teacher = teacher.name; });
    }
    appData.teachers = appData.teachers.map(t => t.id === editingTeacherId ? teacher : t);
  }
  editingTeacherId = null; saveAppData(); renderTeachers(); renderCourses(); renderHomePage(); renderRoutineTable(); updateDashboard();
  switchAdminTab(currentTeacherCategory === "non-departmental" ? "nonDepartmentTeachers" : "departmentTeachers"); alert("Teacher saved successfully!");
}
function editTeacher(id) { const t = appData.teachers.find(item => item.id === id); if (!t) return; editingTeacherId = id; switchAdminTab(t.category === "non-departmental" ? "nonDepartmentTeachers" : "departmentTeachers"); }
function fillTeacherForm(id) {
  const t = appData.teachers.find(item => item.id === id); if (!t) return;
  document.getElementById("teacherName").value = t.name;
  document.getElementById("teacherDesignation").value = t.designation;
  document.getElementById("teacherDepartment").value = t.department || "";
  document.getElementById("teacherEmail").value = t.email || "";
  document.getElementById("teacherRoom").value = t.room || "";
  document.getElementById("teacherPhone").value = t.phone || "";
  document.getElementById("teacherResearch").value = t.research || "";
}
function cancelTeacherEdit() { editingTeacherId = null; switchAdminTab(currentTeacherCategory === "non-departmental" ? "nonDepartmentTeachers" : "departmentTeachers"); }
function deleteTeacher(id) {
  const t = appData.teachers.find(item => item.id === id); if (!t) return;
  if (!confirm(`Delete teacher ${t.name}? Routines and courses using this name will not be deleted.`)) return;
  appData.teachers = appData.teachers.filter(item => item.id !== id);
  saveAppData(); renderTeachers(); switchAdminTab(currentTeacherCategory === "non-departmental" ? "nonDepartmentTeachers" : "departmentTeachers");
}

function addNotice(event) {
  event.preventDefault();
  appData.notices.push({
    id: Date.now(),
    title: document.getElementById("noticeTitle").value.trim(),
    date: document.getElementById("noticeDate").value,
    category: document.getElementById("noticeCategory").value,
    description: document.getElementById("noticeDescription").value.trim()
  });
  saveAppData();
  renderNotices();
  renderHomePage();
  switchAdminTab("notices");
  alert("Notice published successfully!");
}

/* SEARCH */
function handleGlobalSearch(query) {
  const dropdown = document.getElementById("searchResultsDropdown");
  if (!dropdown) return;
  const q = query.trim().toLowerCase();
  if (!q) { dropdown.classList.add("hidden"); dropdown.innerHTML = ""; return; }

  const results = [];
  appData.courses.forEach(c => {
    if (c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)) {
      results.push({ title: `${c.code} - ${c.name}`, subtitle: `Course (${c.semester})`, page: "courses" });
    }
  });
  appData.teachers.forEach(t => {
    if (t.name.toLowerCase().includes(q) || t.designation.toLowerCase().includes(q)) {
      results.push({ title: t.name, subtitle: `Faculty (${t.designation})`, page: "teachers" });
    }
  });
  appData.rooms.forEach(r => {
    if (r.roomNo.toLowerCase().includes(q) || r.type.toLowerCase().includes(q)) {
      results.push({ title: r.roomNo, subtitle: `Room (${r.type})`, page: "rooms" });
    }
  });
  dropdown.innerHTML = results.length ? results.slice(0, 8).map(r =>
    `<button type="button" class="search-result" onclick="execSearchAction('${r.page}')"><strong>${escapeHTML(r.title)}</strong><small>${escapeHTML(r.subtitle)}</small></button>`
  ).join("") : `<div class="search-result">No matching records found.</div>`;
  dropdown.classList.remove("hidden");
}
function execSearchAction(page) {
  navigateTo(page);
  document.getElementById("searchResultsDropdown")?.classList.add("hidden");
  const input = document.getElementById("globalSearchInput");
  if (input) input.value = "";
}

/* MODAL AND UTILITIES */
function openModal(htmlContent) {
  document.getElementById("modalBody").innerHTML = htmlContent;
  document.getElementById("appModal").classList.remove("hidden");
}
function closeModal() {
  document.getElementById("appModal").classList.add("hidden");
}
function toggleMobileMenu() {
  const menu = document.getElementById("navMenu");
  if (!menu) return;
  menu.classList.toggle("mobile-open");
}
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
function escapeJS(value) {
  return String(value ?? "").replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}
