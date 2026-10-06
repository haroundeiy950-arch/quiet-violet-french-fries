import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
} from "react-native";
const COLLEGES = [
  {
    id: "C01",
    name: "College of Computing & Information Technology",
    departments: [
      "Computer Science",
      "Information Technology",
      "Software Engineering",
      "Information Systems",
      "Cyber Security",
      "Data Science",
      "Artificial Intelligence",
    ],
  },
  {
    id: "C02",
    name: "College of Business & Economics",
    departments: [
      "Business Administration",
      "Accounting",
      "Finance",
      "Economics",
      "Marketing",
      "Human Resource Management",
      "Procurement & Logistics",
    ],
  },
  {
    id: "C03",
    name: "College of Engineering",
    departments: [
      "Civil Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Computer Engineering",
      "Telecommunications Engineering",
      "Environmental Engineering",
      "Industrial Engineering",
    ],
  },
  {
    id: "C04",
    name: "College of Education",
    departments: [
      "Primary Education",
      "Secondary Education",
      "Educational Management",
      "Special Needs Education",
      "Early Childhood Education",
      "Educational Psychology",
      "Curriculum Studies",
    ],
  },
  {
    id: "C05",
    name: "College of Health Sciences",
    departments: [
      "Nursing",
      "Public Health",
      "Medical Laboratory Science",
      "Pharmacy",
      "Clinical Medicine",
      "Nutrition & Dietetics",
      "Health Administration",
    ],
  },
  {
    id: "C06",
    name: "College of Agriculture & Environmental Sciences",
    departments: [
      "Agricultural Science",
      "Agribusiness",
      "Environmental Science",
      "Animal Science",
      "Crop Science",
      "Food Science",
      "Natural Resource Management",
    ],
  },
  {
    id: "C07",
    name: "College of Social Sciences & Humanities",
    departments: [
      "Sociology",
      "Psychology",
      "Political Science",
      "International Relations",
      "Journalism & Mass Communication",
      "Development Studies",
      "Languages & Literature",
    ],
  },
];

const COURSE_DATA = {
  "Computer Science": [
    ["CS101", "Introduction to Computer Science"],
    ["CS102", "Programming Fundamentals"],
    ["CS201", "Data Structures & Algorithms"],
    ["CS301", "Database Systems"],
    ["CS401", "Artificial Intelligence"],
  ],

  "Information Technology": [
    ["IT101", "Introduction to Information Technology"],
    ["IT102", "Computer Networks"],
    ["IT201", "Web Development"],
    ["IT301", "Systems Administration"],
    ["IT401", "IT Project Management"],
  ],

  "Software Engineering": [
    ["SE101", "Software Engineering Fundamentals"],
    ["SE201", "Object Oriented Programming"],
    ["SE202", "Software Requirements"],
    ["SE301", "Software Testing"],
    ["SE401", "Software Architecture"],
  ],

  "Information Systems": [
    ["IS101", "Introduction to Information Systems"],
    ["IS201", "Systems Analysis"],
    ["IS202", "Business Information Systems"],
    ["IS301", "Enterprise Systems"],
    ["IS401", "Information Systems Security"],
  ],

  "Cyber Security": [
    ["CY101", "Cyber Security Fundamentals"],
    ["CY201", "Network Security"],
    ["CY202", "Ethical Hacking"],
    ["CY301", "Digital Forensics"],
    ["CY401", "Cyber Security Management"],
  ],

  "Data Science": [
    ["DS101", "Introduction to Data Science"],
    ["DS201", "Statistics for Data Science"],
    ["DS202", "Data Visualization"],
    ["DS301", "Machine Learning"],
    ["DS401", "Big Data Analytics"],
  ],

  "Artificial Intelligence": [
    ["AI101", "Introduction to Artificial Intelligence"],
    ["AI201", "Machine Learning"],
    ["AI202", "Deep Learning"],
    ["AI301", "Natural Language Processing"],
    ["AI401", "Computer Vision"],
  ],

  "Business Administration": [
    ["BA101", "Principles of Business"],
    ["BA201", "Business Management"],
    ["BA202", "Entrepreneurship"],
    ["BA301", "Strategic Management"],
    ["BA401", "Business Research"],
  ],

  "Accounting": [
    ["AC101", "Financial Accounting"],
    ["AC201", "Management Accounting"],
    ["AC202", "Taxation"],
    ["AC301", "Auditing"],
    ["AC401", "Advanced Accounting"],
  ],

  "Finance": [
    ["FN101", "Introduction to Finance"],
    ["FN201", "Financial Management"],
    ["FN202", "Investment Analysis"],
    ["FN301", "Corporate Finance"],
    ["FN401", "Financial Risk Management"],
  ],

  "Economics": [
    ["EC101", "Principles of Economics"],
    ["EC201", "Microeconomics"],
    ["EC202", "Macroeconomics"],
    ["EC301", "Econometrics"],
    ["EC401", "Development Economics"],
  ],

  "Marketing": [
    ["MK101", "Principles of Marketing"],
    ["MK201", "Consumer Behaviour"],
    ["MK202", "Digital Marketing"],
    ["MK301", "Marketing Research"],
    ["MK401", "Strategic Marketing"],
  ],

  "Human Resource Management": [
    ["HR101", "Introduction to Human Resources"],
    ["HR201", "Recruitment & Selection"],
    ["HR202", "Employee Relations"],
    ["HR301", "Performance Management"],
    ["HR401", "Strategic Human Resources"],
  ],

  "Procurement & Logistics": [
    ["PL101", "Introduction to Procurement"],
    ["PL201", "Supply Chain Management"],
    ["PL202", "Purchasing Management"],
    ["PL301", "Logistics Management"],
    ["PL401", "Procurement Strategy"],
  ],

  "Civil Engineering": [
    ["CE101", "Engineering Mathematics"],
    ["CE201", "Structural Engineering"],
    ["CE202", "Construction Materials"],
    ["CE301", "Geotechnical Engineering"],
    ["CE401", "Transportation Engineering"],
  ],

  "Electrical Engineering": [
    ["EE101", "Electrical Circuits"],
    ["EE201", "Digital Electronics"],
    ["EE202", "Electrical Machines"],
    ["EE301", "Power Systems"],
    ["EE401", "Control Systems"],
  ],

  "Mechanical Engineering": [
    ["ME101", "Engineering Mechanics"],
    ["ME201", "Thermodynamics"],
    ["ME202", "Fluid Mechanics"],
    ["ME301", "Machine Design"],
    ["ME401", "Manufacturing Technology"],
  ],

  "Computer Engineering": [
    ["COE101", "Computer Engineering Fundamentals"],
    ["COE201", "Digital Logic"],
    ["COE202", "Microprocessors"],
    ["COE301", "Embedded Systems"],
    ["COE401", "Computer Architecture"],
  ],

  "Telecommunications Engineering": [
    ["TE101", "Telecommunication Fundamentals"],
    ["TE201", "Signal Processing"],
    ["TE202", "Wireless Communication"],
    ["TE301", "Fiber Optics"],
    ["TE401", "Communication Networks"],
  ],

  "Environmental Engineering": [
    ["EN101", "Environmental Engineering"],
    ["EN201", "Water Resources"],
    ["EN202", "Waste Management"],
    ["EN301", "Environmental Impact Assessment"],
    ["EN401", "Pollution Control"],
  ],

  "Industrial Engineering": [
    ["IE101", "Industrial Engineering Fundamentals"],
    ["IE201", "Operations Research"],
    ["IE202", "Production Management"],
    ["IE301", "Quality Management"],
    ["IE401", "Industrial Systems"],
  ],

  "Primary Education": [
    ["PE101", "Foundations of Primary Education"],
    ["PE201", "Teaching Methods"],
    ["PE202", "Child Development"],
    ["PE301", "Primary Curriculum"],
    ["PE401", "Educational Assessment"],
  ],

  "Secondary Education": [
    ["SEDU101", "Foundations of Secondary Education"],
    ["SEDU201", "Teaching Methodology"],
    ["SEDU202", "Educational Psychology"],
    ["SEDU301", "Secondary Curriculum"],
    ["SEDU401", "Assessment Methods"],
  ],

  "Educational Management": [
    ["EM101", "Introduction to Educational Management"],
    ["EM201", "School Leadership"],
    ["EM202", "Education Policy"],
    ["EM301", "Education Administration"],
    ["EM401", "Strategic Education Management"],
  ],

  "Special Needs Education": [
    ["SN101", "Introduction to Special Needs Education"],
    ["SN201", "Inclusive Education"],
    ["SN202", "Learning Disabilities"],
    ["SN301", "Special Education Assessment"],
    ["SN401", "Special Education Practice"],
  ],

  "Early Childhood Education": [
    ["ECED101", "Early Childhood Development"],
    ["ECED201", "Early Learning Methods"],
    ["ECED202", "Child Psychology"],
    ["ECED301", "Early Childhood Curriculum"],
    ["ECED401", "Early Childhood Assessment"],
  ],

  "Educational Psychology": [
    ["EP101", "Introduction to Educational Psychology"],
    ["EP201", "Learning Psychology"],
    ["EP202", "Child Psychology"],
    ["EP301", "Counselling in Education"],
    ["EP401", "Advanced Educational Psychology"],
  ],

  "Curriculum Studies": [
    ["CUR101", "Introduction to Curriculum"],
    ["CUR201", "Curriculum Design"],
    ["CUR202", "Curriculum Development"],
    ["CUR301", "Curriculum Evaluation"],
    ["CUR401", "Advanced Curriculum Studies"],
  ],

  "Nursing": [
    ["NU101", "Fundamentals of Nursing"],
    ["NU201", "Human Anatomy"],
    ["NU202", "Community Nursing"],
    ["NU301", "Medical Nursing"],
    ["NU401", "Advanced Nursing Practice"],
  ],

  "Public Health": [
    ["PH101", "Introduction to Public Health"],
    ["PH201", "Epidemiology"],
    ["PH202", "Community Health"],
    ["PH301", "Health Promotion"],
    ["PH401", "Public Health Management"],
  ],

  "Medical Laboratory Science": [
    ["MLS101", "Laboratory Science Fundamentals"],
    ["MLS201", "Clinical Chemistry"],
    ["MLS202", "Medical Microbiology"],
    ["MLS301", "Hematology"],
    ["MLS401", "Clinical Laboratory Practice"],
  ],

  "Pharmacy": [
    ["PHR101", "Introduction to Pharmacy"],
    ["PHR201", "Pharmacology"],
    ["PHR202", "Pharmaceutical Chemistry"],
    ["PHR301", "Clinical Pharmacy"],
    ["PHR401", "Advanced Pharmacotherapy"],
  ],

  "Clinical Medicine": [
    ["CM101", "Human Anatomy"],
    ["CM201", "Physiology"],
    ["CM202", "Pathology"],
    ["CM301", "Clinical Practice"],
    ["CM401", "Advanced Clinical Medicine"],
  ],

  "Nutrition & Dietetics": [
    ["ND101", "Introduction to Nutrition"],
    ["ND201", "Human Nutrition"],
    ["ND202", "Community Nutrition"],
    ["ND301", "Clinical Nutrition"],
    ["ND401", "Nutrition Management"],
  ],

  "Health Administration": [
    ["HA101", "Health Administration"],
    ["HA201", "Health Policy"],
    ["HA202", "Hospital Management"],
    ["HA301", "Health Economics"],
    ["HA401", "Healthcare Leadership"],
  ],

  "Agricultural Science": [
    ["AG101", "Introduction to Agriculture"],
    ["AG201", "Soil Science"],
    ["AG202", "Agricultural Production"],
    ["AG301", "Farm Management"],
    ["AG401", "Modern Agriculture"],
  ],

  "Agribusiness": [
    ["AB101", "Agribusiness Fundamentals"],
    ["AB201", "Agricultural Marketing"],
    ["AB202", "Farm Business Management"],
    ["AB301", "Agribusiness Finance"],
    ["AB401", "Agribusiness Strategy"],
  ],

  "Environmental Science": [
    ["ES101", "Introduction to Environmental Science"],
    ["ES201", "Ecology"],
    ["ES202", "Climate Change"],
    ["ES301", "Environmental Management"],
    ["ES401", "Environmental Policy"],
  ],

  "Animal Science": [
    ["AN101", "Introduction to Animal Science"],
    ["AN201", "Animal Nutrition"],
    ["AN202", "Animal Production"],
    ["AN301", "Animal Health"],
    ["AN401", "Livestock Management"],
  ],

  "Crop Science": [
    ["CR101", "Introduction to Crop Science"],
    ["CR201", "Crop Production"],
    ["CR202", "Plant Biology"],
    ["CR301", "Crop Protection"],
    ["CR401", "Advanced Crop Science"],
  ],

  "Food Science": [
    ["FS101", "Introduction to Food Science"],
    ["FS201", "Food Chemistry"],
    ["FS202", "Food Microbiology"],
    ["FS301", "Food Processing"],
    ["FS401", "Food Safety"],
  ],

  "Natural Resource Management": [
    ["NR101", "Natural Resources"],
    ["NR201", "Forest Management"],
    ["NR202", "Water Resource Management"],
    ["NR301", "Conservation Science"],
    ["NR401", "Natural Resource Policy"],
  ],

  "Sociology": [
    ["SO101", "Introduction to Sociology"],
    ["SO201", "Social Research"],
    ["SO202", "Family Sociology"],
    ["SO301", "Social Change"],
    ["SO401", "Advanced Sociology"],
  ],

  "Psychology": [
    ["PS101", "Introduction to Psychology"],
    ["PS201", "Developmental Psychology"],
    ["PS202", "Social Psychology"],
    ["PS301", "Counselling Psychology"],
    ["PS401", "Advanced Psychology"],
  ],

  "Political Science": [
    ["PO101", "Introduction to Political Science"],
    ["PO201", "Political Theory"],
    ["PO202", "Comparative Politics"],
    ["PO301", "Public Policy"],
    ["PO401", "Political Research"],
  ],

  "International Relations": [
    ["IR101", "Introduction to International Relations"],
    ["IR201", "International Politics"],
    ["IR202", "International Law"],
    ["IR301", "Diplomatic Studies"],
    ["IR401", "Global Security"],
  ],

  "Journalism & Mass Communication": [
    ["JM101", "Introduction to Journalism"],
    ["JM201", "News Writing"],
    ["JM202", "Media Production"],
    ["JM301", "Broadcast Journalism"],
    ["JM401", "Digital Media"],
  ],

  "Development Studies": [
    ["DV101", "Introduction to Development Studies"],
    ["DV201", "Development Economics"],
    ["DV202", "Community Development"],
    ["DV301", "Development Policy"],
    ["DV401", "Sustainable Development"],
  ],

  "Languages & Literature": [
    ["LL101", "Introduction to Literature"],
    ["LL201", "Language Studies"],
    ["LL202", "Creative Writing"],
    ["LL301", "African Literature"],
    ["LL401", "Advanced Language Studies"],
  ],
};

const buildCourses = () => {
  const courses = [];

  Object.keys(COURSE_DATA).forEach((department) => {
    COURSE_DATA[department].forEach((course, index) => {
      courses.push({
        id: course[0],
        code: course[0],
        title: course[1],
        department,
        credits: 3,
        semester: index < 3 ? "Semester 1" : "Semester 2",
        description:
          `${course[1]} is designed for students in ${department}. ` +
          "The course combines theoretical knowledge with practical university-level learning.",
      });
    });
  });

  return courses;
};

const COURSES = buildCourses();
const DEMO_STUDENT = {
  id: "STU001",
  name: "John Student",
  email: "student@test.com",
  password: "1234",
  college: "College of Computing & Information Technology",
  department: "Computer Science",
  program: "BSc Computer Science",
  level: "Year 3",
  phone: "+250 700 000 000",
};

const DEMO_ADMIN = {
  id: "ADMIN001",
  name: "System Administrator",
  email: "admin@test.com",
  role: "admin",
};

export default function App() {
  
  const [screen, setScreen] = useState("welcome");
  const [currentUser, setCurrentUser] = useState(null);

  const [students, setStudents] = useState([DEMO_STUDENT]);

  const [admissions, setAdmissions] = useState([
    {
      id: "ADM001",
      studentId: "STU001",
      studentName: "John Student",
      email: "student@test.com",
      college: "College of Computing & Information Technology",
      department: "Computer Science",
      program: "BSc Computer Science",
      status: "Approved",
      date: "2026-10-01",
    },
  ]);

  const [registrations, setRegistrations] = useState([]);
  const [payments, setPayments] = useState([]);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerCollege, setRegisterCollege] = useState("");
  const [registerDepartment, setRegisterDepartment] = useState("");
  const [registerProgram, setRegisterProgram] = useState("");
  const [registerLevel, setRegisterLevel] = useState("Year 1");

 
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentReference, setPaymentReference] = useState("");

  
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [cart, setCart] = useState([]);

  const getStudent = () => {
    if (!currentUser || currentUser.role === "admin") {
      return null;
    }

    return students.find(
      (student) => student.id === currentUser.id
    );
  };

  const student = getStudent();

  const selectedCollege = COLLEGES.find(
    (college) => college.name === registerCollege
  );

  const availableDepartments = selectedCollege
    ? selectedCollege.departments
    : [];

  const studentCourses = student
    ? COURSES.filter(
        (course) =>
          course.department === student.department
      )
    : [];

  const goBack = () => {
    if (
      screen === "studentLogin" ||
      screen === "adminLogin" ||
      screen === "studentRegister"
    ) {
      setScreen("welcome");
    } else if (
      screen === "adminStudents" ||
      screen === "adminAdmissions" ||
      screen === "adminRegistrations" ||
      screen === "adminPayments"
    ) {
      setScreen("adminDashboard");
    } else {
      setScreen("studentDashboard");
    }
  };

  
  const logout = () => {
    setCurrentUser(null);
    setLoginEmail("");
    setLoginPassword("");
    setCart([]);
    setSelectedCourse(null);
    setScreen("welcome");
  };

  
  const loginDemoStudent = () => {
    const demo = students.find(
      (item) => item.email === "student@test.com"
    );

    if (!demo) {
      Alert.alert(
        "Error",
        "Demo student account is not available."
      );
      return;
    }

    setLoginEmail("student@test.com");
    setLoginPassword("1234");
    setCurrentUser(demo);

    
    setScreen("studentDashboard");
  };

  const loginDemoAdmin = () => {
    setLoginEmail("admin@test.com");
    setLoginPassword("admin123");
    setCurrentUser(DEMO_ADMIN);
    setScreen("adminDashboard");
  };

  const handleStudentLogin = () => {
    if (!loginEmail.trim() || !loginPassword) {
      Alert.alert(
        "Missing Information",
        "Please enter your email and password."
      );
      return;
    }

    const foundStudent = students.find(
      (item) =>
        item.email.toLowerCase() ===
          loginEmail.trim().toLowerCase() &&
        item.password === loginPassword
    );

    if (!foundStudent) {
      Alert.alert(
        "Login Failed",
        "Incorrect student email or password."
      );
      return;
    }

    setCurrentUser(foundStudent);
    setScreen("studentDashboard");
  };

  
  const handleAdminLogin = () => {
    if (
      loginEmail.trim().toLowerCase() ===
        "admin@test.com" &&
      loginPassword === "admin123"
    ) {
      setCurrentUser(DEMO_ADMIN);
      setScreen("adminDashboard");
      return;
    }

    Alert.alert(
      "Login Failed",
      "Incorrect admin email or password."
    );
  };

  
  const registerStudent = () => {
    if (
      !registerName.trim() ||
      !registerEmail.trim() ||
      !registerPassword ||
      !registerCollege ||
      !registerDepartment ||
      !registerProgram
    ) {
      Alert.alert(
        "Incomplete Form",
        "Please complete all required fields."
      );
      return;
    }

    const exists = students.some(
      (student) =>
        student.email.toLowerCase() ===
        registerEmail.trim().toLowerCase()
    );

    if (exists) {
      Alert.alert(
        "Email Exists",
        "This email already has a student account."
      );
      return;
    }

    const newStudent = {
      id:
        "STU" +
        String(students.length + 1).padStart(3, "0"),
      name: registerName.trim(),
      email: registerEmail.trim(),
      password: registerPassword,
      phone: registerPhone.trim(),
      college: registerCollege,
      department: registerDepartment,
      program: registerProgram,
      level: registerLevel,
    };

    setStudents([...students, newStudent]);

    setLoginEmail(newStudent.email);
    setLoginPassword(newStudent.password);

    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterPhone("");
    setRegisterCollege("");
    setRegisterDepartment("");
    setRegisterProgram("");
    setRegisterLevel("Year 1");

    Alert.alert(
      "Account Created",
      "Your student account has been created successfully.",
      [
        {
          text: "Go To Login",
          onPress: () => setScreen("studentLogin"),
        },
      ]
    );
  };

  
  const submitAdmission = () => {
    if (!student) return;

    const existing = admissions.find(
      (item) => item.studentId === student.id
    );

    if (existing) {
      Alert.alert(
        "Application Already Exists",
        `Your admission is currently ${existing.status}.`
      );
      return;
    }

    const application = {
      id:
        "ADM" +
        String(admissions.length + 1).padStart(3, "0"),
      studentId: student.id,
      studentName: student.name,
      email: student.email,
      college: student.college,
      department: student.department,
      program: student.program,
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };

    setAdmissions([...admissions, application]);

    Alert.alert(
      "Application Submitted",
      "Your admission application has been sent to the administration."
    );
  };

  
  const addCourse = (course) => {
    const alreadyExists = cart.some(
      (item) => item.id === course.id
    );

    if (alreadyExists) {
      Alert.alert(
        "Course Already Added",
        "This course is already in your cart."
      );
      return;
    }

    setCart([...cart, course]);

    Alert.alert(
      "Course Added",
      `${course.code} was added to your registration cart.`
    );
  };

  const removeCourse = (courseId) => {
    setCart(
      cart.filter((course) => course.id !== courseId)
    );
  };

  const submitRegistration = () => {
    if (!student) return;

    if (cart.length === 0) {
      Alert.alert(
        "Empty Cart",
        "Please select courses before submitting."
      );
      return;
    }

    const registration = {
      id:
        "REG" +
        String(registrations.length + 1).padStart(3, "0"),
      studentId: student.id,
      studentName: student.name,
      college: student.college,
      department: student.department,
      program: student.program,
      courses: cart,
      totalCredits: cart.reduce(
        (total, course) =>
          total + course.credits,
        0
      ),
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };

    setRegistrations([
      ...registrations,
      registration,
    ]);

    setCart([]);

    Alert.alert(
      "Registration Submitted",
      "Your semester registration is waiting for administrator approval."
    );
  };

  
  const submitPayment = () => {
    if (!student) return;

    if (!paymentAmount || !paymentMethod) {
      Alert.alert(
        "Incomplete Payment",
        "Please enter amount and payment method."
      );
      return;
    }

    const payment = {
      id:
        "PAY" +
        String(payments.length + 1).padStart(3, "0"),
      studentId: student.id,
      studentName: student.name,
      email: student.email,
      amount: paymentAmount,
      method: paymentMethod,
      reference:
        paymentReference || "Not provided",
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };

    setPayments([...payments, payment]);

    setPaymentAmount("");
    setPaymentMethod("");
    setPaymentReference("");

    Alert.alert(
      "Payment Submitted",
      "Your payment is waiting for administrator verification."
    );
  };

  
  const changeAdmissionStatus = (id, status) => {
    setAdmissions(
      admissions.map((item) =>
        item.id === id
          ? { ...item, status }
          : item
      )
    );
  };

  const changeRegistrationStatus = (
    id,
    status
  ) => {
    setRegistrations(
      registrations.map((item) =>
        item.id === id
          ? { ...item, status }
          : item
      )
    );
  };

  const changePaymentStatus = (id, status) => {
    setPayments(
      payments.map((item) =>
        item.id === id
          ? { ...item, status }
          : item
      )
    );
  };

 
  const Header = ({ title }) => (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={goBack}
      >
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

      <Text style={styles.headerTitle}>
        {title}
      </Text>

      <View style={{ width: 45 }} />
    </View>
  );

  const Button = ({
    title,
    onPress,
    secondary = false,
    danger = false,
  }) => (
    <TouchableOpacity
      style={[
        styles.button,
        secondary && styles.buttonSecondary,
        danger && styles.buttonDanger,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.buttonText,
          secondary && styles.buttonSecondaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const Status = ({ status }) => (
    <View
      style={[
        styles.status,
        status === "Approved" &&
          styles.statusApproved,
        status === "Rejected" &&
          styles.statusRejected,
        status === "Pending" &&
          styles.statusPending,
      ]}
    >
      <Text style={styles.statusText}>
        {status}
      </Text>
    </View>
  );

  const Section = ({ title }) => (
    <Text style={styles.sectionTitle}>
      {title}
    </Text>
  );

  
  if (screen === "welcome") {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#10152F"
        />

        <ScrollView
          contentContainerStyle={
            styles.welcomeContent
          }
        >
          <View style={styles.logo}>
            <Text style={styles.logoText}>
              U
            </Text>
          </View>

          <Text style={styles.welcomeTitle}>
            University Portal
          </Text>

          <Text style={styles.welcomeSubtitle}>
            Smart University Student Management System
          </Text>

          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeCardTitle}>
              Complete University System
            </Text>

            <Text style={styles.welcomeCardText}>
              Manage student accounts, admission,
              colleges, departments, courses,
              semester registration and payments
              from one application.
            </Text>
          </View>

          <Button
            title="Student Login"
            onPress={() => {
              setLoginEmail("");
              setLoginPassword("");
              setScreen("studentLogin");
            }}
          />

          <Button
            title="Create Student Account"
            secondary
            onPress={() =>
              setScreen("studentRegister")
            }
          />

          <TouchableOpacity
            style={styles.adminLoginLink}
            onPress={() =>
              setScreen("adminLogin")
            }
          >
            <Text style={styles.adminLoginText}>
              Administration Login
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "studentLogin") {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#10152F"
        />

        <Header title="Student Login" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Student Login
          </Text>

          <Text style={styles.pageSubtitle}>
            Login to access the complete university system.
          </Text>

          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            value={loginEmail}
            onChangeText={setLoginEmail}
            placeholder="Enter student email"
            placeholderTextColor="#999"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            value={loginPassword}
            onChangeText={setLoginPassword}
            placeholder="Enter password"
            placeholderTextColor="#999"
            secureTextEntry
          />

          <Button
            title="Login"
            onPress={handleStudentLogin}
          />

          <Text style={styles.or}>
            OR
          </Text>

          
          <TouchableOpacity
            style={styles.demoLogin}
            onPress={loginDemoStudent}
            activeOpacity={0.85}
          >
            <View style={styles.demoCircle}>
              <Text style={styles.demoCircleText}>
              
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.demoTitle}>
                Demo Student Account
              </Text>

              <Text style={styles.demoInfo}>
                student@test.com
              </Text>

              <Text style={styles.demoInfo}>
                Password: 1234
              </Text>

              <Text style={styles.demoAction}>
                TAP HERE TO LOGIN DIRECTLY →
              </Text>
            </View>
          </TouchableOpacity>

          <Button
            title="Create New Account"
            secondary
            onPress={() =>
              setScreen("studentRegister")
            }
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "studentRegister") {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#10152F"
        />

        <Header title="Create Account" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Student Registration
          </Text>

          <Text style={styles.pageSubtitle}>
            Create your own student account.
          </Text>

          <Text style={styles.label}>
            Full Name *
          </Text>

          <TextInput
            style={styles.input}
            value={registerName}
            onChangeText={setRegisterName}
            placeholder="Full name"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>
            Email *
          </Text>

          <TextInput
            style={styles.input}
            value={registerEmail}
            onChangeText={setRegisterEmail}
            placeholder="Email address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>
            Password *
          </Text>

          <TextInput
            style={styles.input}
            value={registerPassword}
            onChangeText={setRegisterPassword}
            placeholder="Create password"
            placeholderTextColor="#999"
            secureTextEntry
          />

          <Text style={styles.label}>
            Phone
          </Text>

          <TextInput
            style={styles.input}
            value={registerPhone}
            onChangeText={setRegisterPhone}
            placeholder="Phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>
            Select College *
          </Text>

          <View style={styles.optionContainer}>
            {COLLEGES.map((college) => (
              <TouchableOpacity
                key={college.id}
                style={[
                  styles.option,
                  registerCollege ===
                    college.name &&
                    styles.optionSelected,
                ]}
                onPress={() => {
                  setRegisterCollege(
                    college.name
                  );
                  setRegisterDepartment("");
                  setRegisterProgram("");
                }}
              >
                <Text
                  style={[
                    styles.optionText,
                    registerCollege ===
                      college.name &&
                      styles.optionTextSelected,
                  ]}
                >
                  {college.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {registerCollege !== "" && (
            <>
              <Text style={styles.label}>
                Select Department *
              </Text>

              <View
                style={styles.optionContainer}
              >
                {availableDepartments.map(
                  (department) => (
                    <TouchableOpacity
                      key={department}
                      style={[
                        styles.option,
                        registerDepartment ===
                          department &&
                          styles.optionSelected,
                      ]}
                      onPress={() => {
                        setRegisterDepartment(
                          department
                        );
                        setRegisterProgram(
                          `BSc ${department}`
                        );
                      }}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          registerDepartment ===
                            department &&
                            styles.optionTextSelected,
                        ]}
                      >
                        {department}
                      </Text>
                    </TouchableOpacity>
                  )
                )}
              </View>
            </>
          )}

          {registerProgram !== "" && (
            <>
              <Text style={styles.label}>
                Program
              </Text>

              <View
                style={styles.programBox}
              >
                <Text
                  style={
                    styles.programText
                  }
                >
                  {registerProgram}
                </Text>
              </View>
            </>
          )}

          <Text style={styles.label}>
            Academic Level
          </Text>

          <View style={styles.levelRow}>
            {[
              "Year 1",
              "Year 2",
              "Year 3",
              "Year 4",
            ].map((level) => (
              <TouchableOpacity
                key={level}
                style={[
                  styles.levelButton,
                  registerLevel ===
                    level &&
                    styles.levelSelected,
                ]}
                onPress={() =>
                  setRegisterLevel(level)
                }
              >
                <Text
                  style={[
                    styles.levelText,
                    registerLevel ===
                      level &&
                      styles.levelTextSelected,
                  ]}
                >
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button
            title="Create Student Account"
            onPress={registerStudent}
          />

          <Button
            title="Back to Login"
            secondary
            onPress={() =>
              setScreen("studentLogin")
            }
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "studentDashboard") {
    if (!student) {
      return (
        <SafeAreaView
          style={styles.container}
        >
          <View style={styles.center}>
            <Text>
              Student account not found.
            </Text>

            <Button
              title="Back to Login"
              onPress={() =>
                setScreen("studentLogin")
              }
            />
          </View>
        </SafeAreaView>
      );
    }

    const admission = admissions.find(
      (item) =>
        item.studentId === student.id
    );

    const registration =
      registrations.find(
        (item) =>
          item.studentId === student.id
      );

    const studentPayment =
      payments.filter(
        (item) =>
          item.studentId === student.id
      );

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#10152F"
        />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <View
            style={styles.dashboardHeader}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={styles.headerSmall}
              >
                Welcome back
              </Text>

              <Text
                style={styles.headerName}
              >
                {student.name}
              </Text>

              <Text
                style={styles.headerEmail}
              >
                {student.email}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.logout}
              onPress={logout}
            >
              <Text
                style={styles.logoutText}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.studentSummary}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {student.name
                  .charAt(0)
                  .toUpperCase()}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={styles.summaryName}
              >
                {student.name}
              </Text>

              <Text
                style={styles.summaryText}
              >
                {student.program}
              </Text>

              <Text
                style={styles.summaryText}
              >
                {student.department}
              </Text>

              <Text
                style={styles.summaryText}
              >
                {student.college}
              </Text>
            </View>
          </View>

          <Section title="Student Services" />

          <View style={styles.grid}>
            <Menu
              icon="👤"
              title="My Profile"
              text="View your account"
              onPress={() =>
                setScreen("profile")
              }
            />

            <Menu
              icon="📄"
              title="Admission"
              text="Admission application"
              onPress={() =>
                setScreen("admission")
              }
            />

            <Menu
              icon="📚"
              title="Courses"
              text="View your courses"
              onPress={() =>
                setScreen("courses")
              }
            />

            <Menu
              icon="📝"
              title="Registration"
              text="Semester registration"
              onPress={() =>
                setScreen(
                  "semesterRegistration"
                )
              }
            />

            <Menu
              icon="🛒"
              title="Cart"
              text={`${cart.length} courses`}
              onPress={() =>
                setScreen("cart")
              }
            />

            <Menu
              icon="💳"
              title="Payments"
              text="Pay university fees"
              onPress={() =>
                setScreen("payment")
              }
            />
          </View>

          <Section title="Academic Summary" />

          <View style={styles.summaryRow}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>
                {admission
                  ? admission.status
                  : "None"}
              </Text>

              <Text style={styles.statLabel}>
                Admission
              </Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>
                {registration
                  ? registration.totalCredits
                  : 0}
              </Text>

              <Text style={styles.statLabel}>
                Credits
              </Text>
            </View>
          </View>

          {admission && (
            <View style={styles.infoCard}>
              <Text
                style={styles.infoTitle}
              >
                Admission
              </Text>

              <View
                style={styles.statusRow}
              >
                <Text
                  style={styles.infoText}
                >
                  {admission.id}
                </Text>

                <Status
                  status={admission.status}
                />
              </View>
            </View>
          )}

          {registration && (
            <View style={styles.infoCard}>
              <Text
                style={styles.infoTitle}
              >
                Semester Registration
              </Text>

              <View
                style={styles.statusRow}
              >
                <Text
                  style={styles.infoText}
                >
                  {registration.totalCredits}{" "}
                  Credits
                </Text>

                <Status
                  status={
                    registration.status
                  }
                />
              </View>
            </View>
          )}

          {studentPayment.length > 0 && (
            <View style={styles.infoCard}>
              <Text
                style={styles.infoTitle}
              >
                Latest Payment
              </Text>

              <Text
                style={styles.infoText}
              >
                Amount:{" "}
                {
                  studentPayment[
                    studentPayment.length -
                      1
                  ].amount
                }
              </Text>

              <Status
                status={
                  studentPayment[
                    studentPayment.length -
                      1
                  ].status
                }
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "profile") {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#10152F"
        />

        <Header title="My Profile" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <View style={styles.profileHero}>
            <View style={styles.bigAvatar}>
              <Text
                style={
                  styles.bigAvatarText
                }
              >
                {student.name
                  .charAt(0)
                  .toUpperCase()}
              </Text>
            </View>

            <Text
              style={styles.profileName}
            >
              {student.name}
            </Text>

            <Text
              style={styles.profileEmail}
            >
              {student.email}
            </Text>
          </View>

          <Section title="Personal Information" />

          <Detail
            label="Full Name"
            value={student.name}
          />

          <Detail
            label="Email"
            value={student.email}
          />

          <Detail
            label="Phone"
            value={
              student.phone ||
              "Not provided"
            }
          />

          <Section title="Academic Information" />

          <Detail
            label="College"
            value={student.college}
          />

          <Detail
            label="Department"
            value={student.department}
          />

          <Detail
            label="Program"
            value={student.program}
          />

          <Detail
            label="Academic Level"
            value={student.level}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "admission") {
    const admission = admissions.find(
      (item) =>
        item.studentId === student.id
    );

    return (
      <SafeAreaView style={styles.container}>
        <Header title="Admission" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Admission Application
          </Text>

          <Text
            style={styles.pageSubtitle}
          >
            Submit and monitor your admission.
          </Text>

          <View style={styles.infoCard}>
            <Text
              style={styles.infoTitle}
            >
              Student Information
            </Text>

            <Text style={styles.infoText}>
              Name: {student.name}
            </Text>

            <Text style={styles.infoText}>
              Email: {student.email}
            </Text>

            <Text style={styles.infoText}>
              College: {student.college}
            </Text>

            <Text style={styles.infoText}>
              Department: {student.department}
            </Text>

            <Text style={styles.infoText}>
              Program: {student.program}
            </Text>
          </View>

          {admission ? (
            <View
              style={styles.infoCard}
            >
              <Text
                style={styles.infoTitle}
              >
                Application Status
              </Text>

              <Text
                style={styles.applicationId}
              >
                {admission.id}
              </Text>

              <Status
                status={admission.status}
              />

              <Text
                style={styles.infoText}
              >
                Submitted: {admission.date}
              </Text>
            </View>
          ) : (
            <>
              <View
                style={styles.warning}
              >
                <Text
                  style={styles.warningTitle}
                >
                  No Application
                </Text>

                <Text
                  style={styles.warningText}
                >
                  You have not submitted an
                  admission application.
                </Text>
              </View>

              <Button
                title="Submit Admission Application"
                onPress={
                  submitAdmission
                }
              />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "courses") {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Courses" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <View
            style={styles.courseHero}
          >
            <Text
              style={styles.courseHeroTitle}
            >
              {student.department}
            </Text>

            <Text
              style={styles.courseHeroText}
            >
              {student.program}
            </Text>

            <Text
              style={styles.courseHeroText}
            >
              {student.college}
            </Text>
          </View>

          <Section title="Available Courses" />

          {studentCourses.map(
            (course) => (
              <TouchableOpacity
                key={course.id}
                style={styles.courseCard}
                onPress={() => {
                  setSelectedCourse(
                    course
                  );
                  setScreen(
                    "courseDetails"
                  );
                }}
              >
                <View
                  style={styles.courseCodeBox}
                >
                  <Text
                    style={
                      styles.courseCode
                    }
                  >
                    {course.code}
                  </Text>
                </View>

                <View
                  style={{ flex: 1 }}
                >
                  <Text
                    style={
                      styles.courseTitle
                    }
                  >
                    {course.title}
                  </Text>

                  <Text
                    style={
                      styles.courseMeta
                    }
                  >
                    {course.credits} Credits
                    {" • "}
                    {course.semester}
                  </Text>

                  <Text
                    style={
                      styles.detailsText
                    }
                  >
                    Tap for details →
                  </Text>
                </View>
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "courseDetails") {
    if (!selectedCourse) {
      return null;
    }

    const inCart = cart.some(
      (item) =>
        item.id === selectedCourse.id
    );

    return (
      <SafeAreaView style={styles.container}>
        <Header title="Course Details" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <View
            style={styles.courseDetail}
          >
            <Text
              style={styles.courseDetailCode}
            >
              {selectedCourse.code}
            </Text>

            <Text
              style={styles.courseDetailTitle}
            >
              {selectedCourse.title}
            </Text>

            <Text
              style={styles.courseDetailCredits}
            >
              {selectedCourse.credits} Credits
            </Text>
          </View>

          <Detail
            label="Department"
            value={
              selectedCourse.department
            }
          />

          <Detail
            label="Semester"
            value={
              selectedCourse.semester
            }
          />

          <View style={styles.infoCard}>
            <Text
              style={styles.infoTitle}
            >
              Description
            </Text>

            <Text
              style={styles.description}
            >
              {selectedCourse.description}
            </Text>
          </View>

          <Button
            title={
              inCart
                ? "Already In Cart"
                : "Add To Registration Cart"
            }
            onPress={() => {
              if (!inCart) {
                addCourse(
                  selectedCourse
                );
              }
            }}
          />

          <Button
            title="Open Cart"
            secondary
            onPress={() =>
              setScreen("cart")
            }
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "cart") {
    const totalCredits = cart.reduce(
      (total, course) =>
        total + course.credits,
      0
    );

    return (
      <SafeAreaView style={styles.container}>
        <Header title="Course Cart" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Registration Cart
          </Text>

          {cart.length === 0 ? (
            <View style={styles.empty}>
              <Text
                style={styles.emptyIcon}
              >
                🛒
              </Text>

              <Text
                style={styles.emptyTitle}
              >
                Cart Is Empty
              </Text>

              <Text
                style={styles.emptyText}
              >
                Select courses from the
                Courses section.
              </Text>

              <Button
                title="Browse Courses"
                onPress={() =>
                  setScreen("courses")
                }
              />
            </View>
          ) : (
            <>
              {cart.map((course) => (
                <View
                  key={course.id}
                  style={styles.cartCard}
                >
                  <View
                    style={{ flex: 1 }}
                  >
                    <Text
                      style={
                        styles.courseCode
                      }
                    >
                      {course.code}
                    </Text>

                    <Text
                      style={
                        styles.courseTitle
                      }
                    >
                      {course.title}
                    </Text>

                    <Text
                      style={
                        styles.courseMeta
                      }
                    >
                      {course.credits} Credits
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={
                      styles.removeButton
                    }
                    onPress={() =>
                      removeCourse(
                        course.id
                      )
                    }
                  >
                    <Text
                      style={
                        styles.removeText
                      }
                    >
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}

              <View
                style={styles.totalCard}
              >
                <Text
                  style={styles.totalLabel}
                >
                  Total Courses
                </Text>

                <Text
                  style={styles.totalNumber}
                >
                  {cart.length}
                </Text>

                <Text
                  style={styles.totalLabel}
                >
                  Total Credits
                </Text>

                <Text
                  style={styles.totalNumber}
                >
                  {totalCredits}
                </Text>
              </View>

              <Button
                title="Submit Semester Registration"
                onPress={
                  submitRegistration
                }
              />

              <Button
                title="Add More Courses"
                secondary
                onPress={() =>
                  setScreen("courses")
                }
              />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "semesterRegistration") {
    const myRegistrations =
      registrations.filter(
        (item) =>
          item.studentId === student.id
      );

    return (
      <SafeAreaView style={styles.container}>
        <Header title="Registration" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Semester Registration
          </Text>

          <Button
            title="Select Courses"
            onPress={() =>
              setScreen("courses")
            }
          />

          <Button
            title={`Open Cart (${cart.length})`}
            secondary
            onPress={() =>
              setScreen("cart")
            }
          />

          <Section title="Registration History" />

          {myRegistrations.length ===
          0 ? (
            <View style={styles.empty}>
              <Text
                style={styles.emptyText}
              >
                No registrations yet.
              </Text>
            </View>
          ) : (
            myRegistrations.map(
              (registration) => (
                <View
                  key={registration.id}
                  style={
                    styles.infoCard
                  }
                >
                  <View
                    style={
                      styles.statusRow
                    }
                  >
                    <Text
                      style={
                        styles.applicationId
                      }
                    >
                      {registration.id}
                    </Text>

                    <Status
                      status={
                        registration.status
                      }
                    />
                  </View>

                  <Text
                    style={styles.infoText}
                  >
                    Date:{" "}
                    {registration.date}
                  </Text>

                  <Text
                    style={styles.infoText}
                  >
                    Credits:{" "}
                    {
                      registration.totalCredits
                    }
                  </Text>

                  {registration.courses.map(
                    (course) => (
                      <Text
                        key={course.id}
                        style={
                          styles.courseList
                        }
                      >
                        • {course.code} -{" "}
                        {course.title}
                      </Text>
                    )
                  )}
                </View>
              )
            )
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "payment") {
    const myPayments =
      payments.filter(
        (item) =>
          item.studentId === student.id
      );

    return (
      <SafeAreaView style={styles.container}>
        <Header title="Payments" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <View
            style={styles.paymentHero}
          >
            <Text
              style={styles.paymentIcon}
            >
              💳
            </Text>

            <Text
              style={
                styles.paymentHeroTitle
              }
            >
              University Payment
            </Text>

            <Text
              style={
                styles.paymentHeroText
              }
            >
              Submit your university
              payment information.
            </Text>
          </View>

          <Text style={styles.label}>
            Amount *
          </Text>

          <TextInput
            style={styles.input}
            value={paymentAmount}
            onChangeText={setPaymentAmount}
            placeholder="Enter amount"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />

          <Text style={styles.label}>
            Payment Method *
          </Text>

          <View style={styles.levelRow}>
            {[
              "Mobile Money",
              "Bank",
              "Card",
              "Cash",
            ].map((method) => (
              <TouchableOpacity
                key={method}
                style={[
                  styles.levelButton,
                  paymentMethod ===
                    method &&
                    styles.levelSelected,
                ]}
                onPress={() =>
                  setPaymentMethod(
                    method
                  )
                }
              >
                <Text
                  style={[
                    styles.levelText,
                    paymentMethod ===
                      method &&
                      styles.levelTextSelected,
                  ]}
                >
                  {method}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>
            Payment Reference
          </Text>

          <TextInput
            style={styles.input}
            value={paymentReference}
            onChangeText={
              setPaymentReference
            }
            placeholder="Transaction number"
            placeholderTextColor="#999"
          />

          <Button
            title="Submit Payment"
            onPress={submitPayment}
          />

          <Section title="Payment History" />

          {myPayments.length === 0 ? (
            <View style={styles.empty}>
              <Text
                style={styles.emptyText}
              >
                No payments submitted.
              </Text>
            </View>
          ) : (
            myPayments.map((payment) => (
              <View
                key={payment.id}
                style={styles.infoCard}
              >
                <View
                  style={
                    styles.statusRow
                  }
                >
                  <Text
                    style={
                      styles.applicationId
                    }
                  >
                    {payment.id}
                  </Text>

                  <Status
                    status={payment.status}
                  />
                </View>

                <Text
                  style={styles.infoText}
                >
                  Amount: {payment.amount}
                </Text>

                <Text
                  style={styles.infoText}
                >
                  Method: {payment.method}
                </Text>

                <Text
                  style={styles.infoText}
                >
                  Reference:{" "}
                  {payment.reference}
                </Text>

                <Text
                  style={styles.infoText}
                >
                  Date: {payment.date}
                </Text>
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "adminLogin") {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Admin Login" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Administration
          </Text>

          <Text
            style={styles.pageSubtitle}
          >
            Login to manage the complete university system.
          </Text>

          <Text style={styles.label}>
            Admin Email
          </Text>

          <TextInput
            style={styles.input}
            value={loginEmail}
            onChangeText={setLoginEmail}
            placeholder="admin@test.com"
            placeholderTextColor="#999"
            autoCapitalize="none"
          />

          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            value={loginPassword}
            onChangeText={setLoginPassword}
            placeholder="admin123"
            placeholderTextColor="#999"
            secureTextEntry
          />

          <Button
            title="Admin Login"
            onPress={handleAdminLogin}
          />

          <Text style={styles.or}>
            OR
          </Text>

          <TouchableOpacity
            style={styles.demoLogin}
            onPress={loginDemoAdmin}
          >
            <View style={styles.demoCircle}>
              <Text style={styles.demoCircleText}>
                🛡️
              </Text>
            </View>

            <View>
              <Text
                style={styles.demoTitle}
              >
                Demo Admin Account
              </Text>

              <Text
                style={styles.demoInfo}
              >
                admin@test.com
              </Text>

              <Text
                style={styles.demoInfo}
              >
                Password: admin123
              </Text>

              <Text
                style={styles.demoAction}
              >
                TAP HERE TO LOGIN DIRECTLY →
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "adminDashboard") {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#10152F"
        />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <View
            style={styles.dashboardHeader}
          >
            <View>
              <Text
                style={styles.headerSmall}
              >
                Administration
              </Text>

              <Text
                style={styles.headerName}
              >
                System Administrator
              </Text>

              <Text
                style={styles.headerEmail}
              >
                admin@test.com
              </Text>
            </View>

            <TouchableOpacity
              style={styles.logout}
              onPress={logout}
            >
              <Text
                style={styles.logoutText}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>

          <Section title="System Overview" />

          <View style={styles.grid}>
            <AdminStat
              number={students.length}
              title="Students"
            />

            <AdminStat
              number={admissions.length}
              title="Admissions"
            />

            <AdminStat
              number={registrations.length}
              title="Registrations"
            />

            <AdminStat
              number={payments.length}
              title="Payments"
            />
          </View>

          <Section title="Administration" />

          <AdminMenu
            icon="👨‍🎓"
            title="Students"
            text="View all student accounts"
            onPress={() =>
              setScreen("adminStudents")
            }
          />

          <AdminMenu
            icon="📄"
            title="Admissions"
            text="Approve or reject applications"
            onPress={() =>
              setScreen("adminAdmissions")
            }
          />

          <AdminMenu
            icon="📚"
            title="Course Registrations"
            text="Manage semester registrations"
            onPress={() =>
              setScreen(
                "adminRegistrations"
              )
            }
          />

          <AdminMenu
            icon="💳"
            title="Payments"
            text="Verify student payments"
            onPress={() =>
              setScreen("adminPayments")
            }
          />

          <View
            style={styles.adminCollegeCard}
          >
            <Text
              style={
                styles.adminCollegeTitle
              }
            >
              University Colleges
            </Text>

            <Text
              style={
                styles.adminCollegeNumber
              }
            >
              {COLLEGES.length}
            </Text>

            <Text
              style={
                styles.adminCollegeText
              }
            >
              Each college contains seven departments.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "adminStudents") {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Students" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Student Accounts
          </Text>

          {students.map((item) => (
            <View
              key={item.id}
              style={styles.adminCard}
            >
              <View
                style={styles.adminAvatar}
              >
                <Text
                  style={
                    styles.adminAvatarText
                  }
                >
                  {item.name
                    .charAt(0)
                    .toUpperCase()}
                </Text>
              </View>

              <View
                style={{ flex: 1 }}
              >
                <Text
                  style={
                    styles.adminStudentName
                  }
                >
                  {item.name}
                </Text>

                <Text
                  style={
                    styles.adminText
                  }
                >
                  ID: {item.id}
                </Text>

                <Text
                  style={
                    styles.adminText
                  }
                >
                  Email: {item.email}
                </Text>

                <Text
                  style={
                    styles.adminText
                  }
                >
                  College: {item.college}
                </Text>

                <Text
                  style={
                    styles.adminText
                  }
                >
                  Department:{" "}
                  {item.department}
                </Text>

                <Text
                  style={
                    styles.adminText
                  }
                >
                  Program: {item.program}
                </Text>

                <Text
                  style={
                    styles.adminText
                  }
                >
                  Level: {item.level}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }

 
  if (screen === "adminAdmissions") {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Admissions" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Admission Applications
          </Text>

          {admissions.map((item) => (
            <View
              key={item.id}
              style={styles.adminRecord}
            >
              <View
                style={styles.statusRow}
              >
                <Text
                  style={
                    styles.applicationId
                  }
                >
                  {item.id}
                </Text>

                <Status
                  status={item.status}
                />
              </View>

              <Text
                style={styles.recordName}
              >
                {item.studentName}
              </Text>

              <Text
                style={styles.infoText}
              >
                Email: {item.email}
              </Text>

              <Text
                style={styles.infoText}
              >
                College: {item.college}
              </Text>

              <Text
                style={styles.infoText}
              >
                Department:{" "}
                {item.department}
              </Text>

              <Text
                style={styles.infoText}
              >
                Program: {item.program}
              </Text>

              <Text
                style={styles.infoText}
              >
                Date: {item.date}
              </Text>

              {item.status ===
                "Pending" && (
                <View
                  style={styles.actionRow}
                >
                  <TouchableOpacity
                    style={
                      styles.approve
                    }
                    onPress={() =>
                      changeAdmissionStatus(
                        item.id,
                        "Approved"
                      )
                    }
                  >
                    <Text
                      style={
                        styles.actionText
                      }
                    >
                      Approve
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={
                      styles.reject
                    }
                    onPress={() =>
                      changeAdmissionStatus(
                        item.id,
                        "Rejected"
                      )
                    }
                  >
                    <Text
                      style={
                        styles.actionText
                      }
                    >
                      Reject
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }

 
  if (screen === "adminRegistrations") {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Registrations" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Course Registrations
          </Text>

          {registrations.length === 0 ? (
            <View style={styles.empty}>
              <Text
                style={styles.emptyText}
              >
                No registrations yet.
              </Text>
            </View>
          ) : (
            registrations.map(
              (registration) => (
                <View
                  key={registration.id}
                  style={
                    styles.adminRecord
                  }
                >
                  <View
                    style={
                      styles.statusRow
                    }
                  >
                    <Text
                      style={
                        styles.applicationId
                      }
                    >
                      {registration.id}
                    </Text>

                    <Status
                      status={
                        registration.status
                      }
                    />
                  </View>

                  <Text
                    style={
                      styles.recordName
                    }
                  >
                    {
                      registration.studentName
                    }
                  </Text>

                  <Text
                    style={styles.infoText}
                  >
                    College:{" "}
                    {registration.college}
                  </Text>

                  <Text
                    style={styles.infoText}
                  >
                    Department:{" "}
                    {registration.department}
                  </Text>

                  <Text
                    style={styles.infoText}
                  >
                    Program:{" "}
                    {registration.program}
                  </Text>

                  <Text
                    style={styles.infoText}
                  >
                    Credits:{" "}
                    {
                      registration.totalCredits
                    }
                  </Text>

                  <Text
                    style={
                      styles.registeredTitle
                    }
                  >
                    Courses
                  </Text>

                  {registration.courses.map(
                    (course) => (
                      <Text
                        key={course.id}
                        style={
                          styles.courseList
                        }
                      >
                        • {course.code} -{" "}
                        {course.title}
                      </Text>
                    )
                  )}

                  {registration.status ===
                    "Pending" && (
                    <View
                      style={
                        styles.actionRow
                      }
                    >
                      <TouchableOpacity
                        style={
                          styles.approve
                        }
                        onPress={() =>
                          changeRegistrationStatus(
                            registration.id,
                            "Approved"
                          )
                        }
                      >
                        <Text
                          style={
                            styles.actionText
                          }
                        >
                          Approve
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={
                          styles.reject
                        }
                        onPress={() =>
                          changeRegistrationStatus(
                            registration.id,
                            "Rejected"
                          )
                        }
                      >
                        <Text
                          style={
                            styles.actionText
                          }
                        >
                          Reject
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )
            )
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  
  if (screen === "adminPayments") {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Payments" />

        <ScrollView
          contentContainerStyle={styles.page}
        >
          <Text style={styles.pageTitle}>
            Student Payments
          </Text>

          {payments.length === 0 ? (
            <View style={styles.empty}>
              <Text
                style={styles.emptyText}
              >
                No payments submitted.
              </Text>
            </View>
          ) : (
            payments.map((payment) => (
              <View
                key={payment.id}
                style={
                  styles.adminRecord
                }
              >
                <View
                  style={
                    styles.statusRow
                  }
                >
                  <Text
                    style={
                      styles.applicationId
                    }
                  >
                    {payment.id}
                  </Text>

                  <Status
                    status={payment.status}
                  />
                </View>

                <Text
                  style={
                    styles.recordName
                  }
                >
                  {payment.studentName}
                </Text>

                <Text
                  style={styles.infoText}
                >
                  Email: {payment.email}
                </Text>

                <Text
                  style={styles.paymentAmount}
                >
                  Amount: {payment.amount}
                </Text>

                <Text
                  style={styles.infoText}
                >
                  Method: {payment.method}
                </Text>

                <Text
                  style={styles.infoText}
                >
                  Reference:{" "}
                  {payment.reference}
                </Text>

                <Text
                  style={styles.infoText}
                >
                  Date: {payment.date}
                </Text>

                {payment.status ===
                  "Pending" && (
                  <View
                    style={
                      styles.actionRow
                    }
                  >
                    <TouchableOpacity
                      style={
                        styles.approve
                      }
                      onPress={() =>
                        changePaymentStatus(
                          payment.id,
                          "Approved"
                        )
                      }
                    >
                      <Text
                        style={
                          styles.actionText
                        }
                      >
                        Approve
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={
                        styles.reject
                      }
                      onPress={() =>
                        changePaymentStatus(
                          payment.id,
                          "Rejected"
                        )
                      }
                    >
                      <Text
                        style={
                          styles.actionText
                        }
                      >
                        Reject
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return null;
}


function Menu({
  icon,
  title,
  text,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.menu}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.menuIcon}>
        {icon}
      </Text>

      <Text style={styles.menuTitle}>
        {title}
      </Text>

      <Text style={styles.menuText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

function Detail({ label, value }) {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailLabel}>
        {label}
      </Text>

      <Text style={styles.detailValue}>
        {value}
      </Text>
    </View>
  );
}

function AdminStat({ number, title }) {
  return (
    <View style={styles.adminStat}>
      <Text style={styles.adminStatNumber}>
        {number}
      </Text>

      <Text style={styles.adminStatTitle}>
        {title}
      </Text>
    </View>
  );
}

function AdminMenu({
  icon,
  title,
  text,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.adminMenu}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.adminMenuIcon}>
        {icon}
      </Text>

      <View style={{ flex: 1 }}>
        <Text style={styles.adminMenuTitle}>
          {title}
        </Text>

        <Text style={styles.adminMenuText}>
          {text}
        </Text>
      </View>

      <Text style={styles.adminArrow}>
        →
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FC",
  },

  page: {
    padding: 20,
    paddingBottom: 60,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  header: {
    height: 68,
    backgroundColor: "#10152F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor:
      "rgba(255,255,255,0.12)",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "#FFFFFF",
    fontSize: 35,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "900",
  },

 

  welcomeContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#10152F",
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#6C63FF",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 25,
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 55,
    fontWeight: "900",
  },

  welcomeTitle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 31,
    fontWeight: "900",
  },

  welcomeSubtitle: {
    color: "#B8BDD0",
    textAlign: "center",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 28,
  },

  welcomeCard: {
    backgroundColor:
      "rgba(255,255,255,0.08)",
    borderRadius: 22,
    padding: 22,
    marginBottom: 20,
  },

  welcomeCardTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 8,
  },

  welcomeCardText: {
    color: "#C9CCDA",
    lineHeight: 21,
    fontSize: 13,
  },

  adminLoginLink: {
    alignItems: "center",
    marginTop: 22,
  },

  adminLoginText: {
    color: "#AAA5FF",
    fontWeight: "800",
  },

  

  button: {
    minHeight: 54,
    backgroundColor: "#6C63FF",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    paddingHorizontal: 18,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
  },

  buttonSecondary: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#6C63FF",
  },

  buttonSecondaryText: {
    color: "#6C63FF",
  },

  buttonDanger: {
    backgroundColor: "#D63D3D",
  },


  pageTitle: {
    color: "#191D35",
    fontSize: 27,
    fontWeight: "900",
    marginBottom: 7,
  },

  pageSubtitle: {
    color: "#74798D",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 18,
  },

  label: {
    color: "#34384E",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 14,
    marginBottom: 7,
  },

  input: {
    height: 53,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E5EE",
    borderRadius: 15,
    paddingHorizontal: 16,
    color: "#22263B",
    fontSize: 14,
  },

  or: {
    textAlign: "center",
    color: "#8A8FA2",
    fontWeight: "900",
    marginVertical: 17,
  },


  demoLogin: {
    flexDirection: "row",
    backgroundColor: "#EDEBFF",
    borderWidth: 1,
    borderColor: "#D9D5FF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },

  demoCircle: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#6C63FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  demoCircleText: {
    fontSize: 22,
  },

  demoTitle: {
    color: "#24283E",
    fontSize: 16,
    fontWeight: "900",
  },

  demoInfo: {
    color: "#656A7D",
    fontSize: 12,
    marginTop: 2,
  },

  demoAction: {
    color: "#6C63FF",
    fontSize: 11,
    fontWeight: "900",
    marginTop: 7,
  },


  optionContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#E2E5EE",
  },

  option: {
    padding: 13,
    borderRadius: 11,
    backgroundColor: "#F7F8FC",
    marginBottom: 5,
  },

  optionSelected: {
    backgroundColor: "#6C63FF",
  },

  optionText: {
    color: "#44495D",
    fontSize: 13,
    fontWeight: "700",
  },

  optionTextSelected: {
    color: "#FFFFFF",
    fontWeight: "900",
  },

  programBox: {
    backgroundColor: "#EDEBFF",
    borderRadius: 15,
    padding: 16,
  },

  programText: {
    color: "#403A7A",
    fontSize: 15,
    fontWeight: "900",
  },

  levelRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  levelButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E1E4EC",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },

  levelSelected: {
    backgroundColor: "#6C63FF",
    borderColor: "#6C63FF",
  },

  levelText: {
    color: "#555A6D",
    fontSize: 12,
    fontWeight: "800",
  },

  levelTextSelected: {
    color: "#FFFFFF",
  },


  dashboardHeader: {
    backgroundColor: "#10152F",
    marginHorizontal: -20,
    marginTop: -20,
    padding: 22,
    paddingTop: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerSmall: {
    color: "#AEB3CA",
    fontSize: 12,
  },

  headerName: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 3,
  },

  headerEmail: {
    color: "#AEB3CA",
    fontSize: 12,
    marginTop: 3,
  },

  logout: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 11,
  },

  logoutText: {
    color: "#10152F",
    fontWeight: "900",
    fontSize: 11,
  },

  studentSummary: {
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    padding: 16,
    marginTop: 18,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#6C63FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
  },

  summaryName: {
    color: "#22263B",
    fontSize: 18,
    fontWeight: "900",
  },

  summaryText: {
    color: "#777C90",
    fontSize: 11,
    marginTop: 2,
  },

  sectionTitle: {
    color: "#20243A",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 25,
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  menu: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 16,
    marginBottom: 11,
    minHeight: 135,
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  menuIcon: {
    fontSize: 28,
    marginBottom: 10,
  },

  menuTitle: {
    color: "#25293E",
    fontSize: 15,
    fontWeight: "900",
  },

  menuText: {
    color: "#7A7F91",
    fontSize: 11,
    lineHeight: 16,
    marginTop: 5,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stat: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  statNumber: {
    color: "#6C63FF",
    fontSize: 18,
    fontWeight: "900",
  },

  statLabel: {
    color: "#777C90",
    fontSize: 11,
    marginTop: 5,
  },

  

  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    marginBottom: 11,
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  infoTitle: {
    color: "#292D42",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 8,
  },

  infoText: {
    color: "#707589",
    fontSize: 12,
    lineHeight: 20,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  status: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },

  statusApproved: {
    backgroundColor: "#D8F6E6",
  },

  statusRejected: {
    backgroundColor: "#FFE0E0",
  },

  statusPending: {
    backgroundColor: "#FFF1C9",
  },

  statusText: {
    color: "#44485B",
    fontSize: 10,
    fontWeight: "900",
  },

  profileHero: {
    backgroundColor: "#10152F",
    borderRadius: 23,
    alignItems: "center",
    padding: 27,
  },

  bigAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#6C63FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  bigAvatarText: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "900",
  },

  profileName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
  },

  profileEmail: {
    color: "#B9BED0",
    fontSize: 12,
    marginTop: 4,
  },

  detail: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  detailLabel: {
    color: "#858A9C",
    fontSize: 11,
    marginBottom: 4,
  },

  detailValue: {
    color: "#292D42",
    fontSize: 14,
    fontWeight: "800",
  },

  applicationId: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "900",
  },

  warning: {
    backgroundColor: "#FFF6D8",
    borderRadius: 17,
    padding: 17,
    marginBottom: 12,
  },

  warningTitle: {
    color: "#8B6500",
    fontWeight: "900",
    marginBottom: 5,
  },

  warningText: {
    color: "#806C37",
    fontSize: 12,
  },
  courseHero: {
    backgroundColor: "#10152F",
    borderRadius: 22,
    padding: 21,
    marginBottom: 20,
  },

  courseHeroTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
  },

  courseHeroText: {
    color: "#B8BDD0",
    fontSize: 12,
    marginTop: 5,
  },

  courseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  courseCodeBox: {
    width: 62,
    height: 62,
    borderRadius: 15,
    backgroundColor: "#EDEBFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  courseCode: {
    color: "#6C63FF",
    fontSize: 12,
    fontWeight: "900",
  },

  courseTitle: {
    color: "#292D42",
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 20,
  },

  courseMeta: {
    color: "#858A9C",
    fontSize: 11,
    marginTop: 4,
  },

  detailsText: {
    color: "#6C63FF",
    fontSize: 10,
    fontWeight: "900",
    marginTop: 5,
  },

  courseDetail: {
    backgroundColor: "#10152F",
    borderRadius: 22,
    padding: 23,
    marginBottom: 15,
  },

  courseDetailCode: {
    color: "#AAA5FF",
    fontWeight: "900",
  },

  courseDetailTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
    lineHeight: 32,
    marginTop: 9,
  },

  courseDetailCredits: {
    color: "#B8BDD0",
    fontSize: 12,
    marginTop: 10,
  },

  description: {
    color: "#707589",
    fontSize: 13,
    lineHeight: 21,
  },

  cartCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  removeButton: {
    backgroundColor: "#FFE5E5",
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 10,
  },

  removeText: {
    color: "#D33B3B",
    fontSize: 10,
    fontWeight: "900",
  },

  totalCard: {
    backgroundColor: "#10152F",
    borderRadius: 20,
    padding: 20,
    marginBottom: 5,
  },

  totalLabel: {
    color: "#B8BDD0",
    fontSize: 11,
  },

  totalNumber: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 7,
  },

  courseList: {
    color: "#73788B",
    fontSize: 12,
    lineHeight: 20,
  },

  registeredTitle: {
    color: "#292D42",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 10,
    marginBottom: 4,
  },

  paymentHero: {
    backgroundColor: "#10152F",
    borderRadius: 22,
    padding: 23,
    marginBottom: 17,
  },

  paymentIcon: {
    fontSize: 38,
    marginBottom: 9,
  },

  paymentHeroTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
  },

  paymentHeroText: {
    color: "#B8BDD0",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 6,
  },

  paymentAmount: {
    color: "#25293E",
    fontSize: 18,
    fontWeight: "900",
    marginVertical: 5,
  },

  empty: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  emptyIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  emptyTitle: {
    color: "#25293E",
    fontSize: 18,
    fontWeight: "900",
  },

  emptyText: {
    color: "#7C8193",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 19,
  },

  adminStat: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 17,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  adminStatNumber: {
    color: "#6C63FF",
    fontSize: 24,
    fontWeight: "900",
  },

  adminStatTitle: {
    color: "#777C90",
    fontSize: 11,
    marginTop: 4,
  },

  adminMenu: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  adminMenuIcon: {
    fontSize: 28,
    marginRight: 14,
  },

  adminMenuTitle: {
    color: "#25293E",
    fontSize: 15,
    fontWeight: "900",
  },

  adminMenuText: {
    color: "#7A7F91",
    fontSize: 11,
    marginTop: 4,
  },

  adminArrow: {
    color: "#6C63FF",
    fontSize: 23,
    fontWeight: "900",
  },

  adminCollegeCard: {
    backgroundColor: "#6C63FF",
    borderRadius: 21,
    padding: 21,
    marginTop: 10,
  },

  adminCollegeTitle: {
    color: "#DCD9FF",
    fontSize: 12,
    fontWeight: "800",
  },

  adminCollegeNumber: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "900",
  },

  adminCollegeText: {
    color: "#DCD9FF",
    fontSize: 11,
  },

  adminCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 16,
    marginBottom: 11,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  adminAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#EDEBFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  adminAvatarText: {
    color: "#6C63FF",
    fontSize: 20,
    fontWeight: "900",
  },

  adminStudentName: {
    color: "#25293E",
    fontSize: 16,
    fontWeight: "900",
    marginBottom: 4,
  },

  adminText: {
    color: "#73788B",
    fontSize: 10,
    lineHeight: 17,
  },

  adminRecord: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ECEEF4",
  },

  recordName: {
    color: "#25293E",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 10,
    marginBottom: 5,
  },

  actionRow: {
    flexDirection: "row",
    gap: 9,
    marginTop: 14,
  },

  approve: {
    flex: 1,
    backgroundColor: "#22A06B",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  reject: {
    flex: 1,
    backgroundColor: "#D64545",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  actionText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },
});