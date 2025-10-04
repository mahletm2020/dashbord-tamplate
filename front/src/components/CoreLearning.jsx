// src/pages/CoreLearning.jsx
import { useEffect, useState } from "react";

export const CoreLearning = () => {
  const [loading, setLoading] = useState(true);
  const [enrollments, setEnrollments] = useState([]);
  const [upcomingLessons, setUpcomingLessons] = useState([]);
  const [upcomingQuizzes, setUpcomingQuizzes] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // simulate backend delay and fill with mock data
    setTimeout(() => {
      setEnrollments([
        {
          id: 1,
          courses: { title: "React Fundamentals", instructor_name: "John Doe" },
          status: "in-progress",
          progress_percentage: 65,
        },
        {
          id: 2,
          courses: { title: "Advanced JavaScript", instructor_name: "Jane Smith" },
          status: "completed",
          progress_percentage: 100,
        },
      ]);

      setUpcomingLessons([
        {
          id: 1,
          title: "React Hooks Deep Dive",
          courses: { title: "React Fundamentals" },
          scheduled_at: "2025-10-05T15:00:00Z",
        },
        {
          id: 2,
          title: "JavaScript Closures Workshop",
          courses: { title: "Advanced JavaScript" },
          scheduled_at: "2025-10-08T18:00:00Z",
        },
      ]);

      setUpcomingQuizzes([
        {
          id: 1,
          title: "React Basics Quiz",
          courses: { title: "React Fundamentals" },
          total_questions: 10,
          scheduled_at: "2025-10-06T14:00:00Z",
        },
      ]);

      setCertificates([
        {
          id: 1,
          courses: { title: "Advanced JavaScript", instructor_name: "Jane Smith" },
          issued_at: "2025-08-01T00:00:00Z",
          certificate_url: "#",
        },
      ]);

      setLoading(false);
    }, 800);
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-green-200 border-t-[#8BD02A] rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8BD02A] to-green-600 bg-clip-text text-transparent">
          My Learning Journey
        </h2>
        <p className="text-gray-500 mt-1">Track your progress and continue learning</p>
      </div>

      {/* Enrolled Courses */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800 mb-5">
          📚 Enrolled Courses
        </h3>
        {enrollments.length === 0 ? (
          <div className="p-10 text-center bg-white rounded-2xl border-2 border-dashed border-green-200">
            <div className="text-4xl mb-3">📖</div>
            <p className="text-gray-600">No enrolled courses yet</p>
            <p className="text-gray-400 text-sm mt-1">Start your learning journey today!</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {enrollments.map((enrollment) => (
              <div
                key={enrollment.id}
                className="bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-lg transition p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {enrollment.courses?.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Instructor: {enrollment.courses?.instructor_name}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white uppercase ${
                      enrollment.status === "completed"
                        ? "bg-gradient-to-r from-green-500 to-green-700"
                        : "bg-gradient-to-r from-blue-500 to-blue-700"
                    }`}
                  >
                    {enrollment.status}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
                    <span>Progress</span>
                    <span className="text-green-600 font-bold">
                      {enrollment.progress_percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-green-50 rounded-full h-2">
                    <div
                      className="h-2 bg-[#8BD02A] rounded-full transition-all"
                      style={{ width: `${enrollment.progress_percentage}%` }}
                    ></div>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-[#8BD02A] to-green-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2">
                  ▶️ Continue Learning
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Upcoming Lessons & Quizzes */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <section>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            📅 Upcoming Lessons
          </h3>
          {upcomingLessons.length === 0 ? (
            <div className="p-6 text-center bg-white border-2 border-dashed border-green-200 rounded-xl">
              <div className="text-3xl mb-2">📝</div>
              <p className="text-gray-600 text-sm">No upcoming lessons</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {upcomingLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="bg-white border border-green-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-green-400 transition"
                >
                  <h4 className="text-base font-semibold text-gray-800">
                    {lesson.title}
                  </h4>
                  <p className="text-sm text-gray-500">{lesson.courses?.title}</p>
                  <div className="flex items-center gap-2 text-sm text-green-600 mt-2">
                    ⏰{" "}
                    {new Date(lesson.scheduled_at).toLocaleString([], {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            ✍️ Upcoming Quizzes
          </h3>
          {upcomingQuizzes.length === 0 ? (
            <div className="p-6 text-center bg-white border-2 border-dashed border-green-200 rounded-xl">
              <div className="text-3xl mb-2">📋</div>
              <p className="text-gray-600 text-sm">No upcoming quizzes</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {upcomingQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="bg-white border border-green-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-green-400 transition"
                >
                  <h4 className="text-base font-semibold text-gray-800">
                    {quiz.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-1">
                    {quiz.courses?.title}
                  </p>
                  <div className="flex justify-between text-xs text-gray-600 font-medium">
                    <span>{quiz.total_questions} questions</span>
                    <span className="text-green-600">
                      {new Date(quiz.scheduled_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Certificates */}
      <section>
        <h3 className="text-xl font-semibold mb-5 text-gray-800 flex items-center gap-2">
          🏆 Certificates Earned
        </h3>
        {certificates.length === 0 ? (
          <div className="p-10 text-center bg-white border-2 border-dashed border-green-200 rounded-2xl">
            <div className="text-4xl mb-3">🎖️</div>
            <p className="text-gray-600">No certificates earned yet</p>
            <p className="text-gray-400 text-sm mt-1">
              Complete courses to earn certificates!
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-300 rounded-2xl text-center p-6 shadow-md hover:shadow-lg transition transform hover:scale-[1.03]"
              >
                <div className="text-4xl mb-2">🏆</div>
                <h4 className="font-semibold text-yellow-800">
                  {cert.courses?.title}
                </h4>
                <p className="text-sm text-yellow-700 mb-3">
                  Issued:{" "}
                  {new Date(cert.issued_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <a
                  href={cert.certificate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 font-semibold rounded-lg shadow hover:shadow-md transition"
                >
                  📜 View Certificate
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
