const dummyCourses = [
    {
      "courseName": "Introduction to JavaScript",
      "courseDescription": "Learn the basics of JavaScript programming.",
      "courseDuration": "4 weeks",
      "instructor": "John Doe",
      "enrollmentCapacity": 30,
      "availableSeats": 15,
      "specialSeats": 5
    },
    {
      "courseName": "Web Development Fundamentals",
      "courseDescription": "Get started with web development technologies.",
      "courseDuration": "6 weeks",
      "instructor": "Jane Smith",
      "enrollmentCapacity": 25,
      "availableSeats": 10,
      "specialSeats": 3
    },
    {
      "courseName": "Data Science Essentials",
      "courseDescription": "Explore the world of data science and analytics.",
      "courseDuration": "8 weeks",
      "instructor": "Mike Johnson",
      "enrollmentCapacity": 40,
      "availableSeats": 20,
      "specialSeats": 8
    },
    {
      "courseName": "UX/UI Design Workshop",
      "courseDescription": "Learn user experience and user interface design principles.",
      "courseDuration": "5 weeks",
      "instructor": "Sara Williams",
      "enrollmentCapacity": 20,
      "availableSeats": 12,
      "specialSeats": 4
    },
    {
      "courseName": "Python Programming for Beginners",
      "courseDescription": "A beginner-friendly introduction to Python programming.",
      "courseDuration": "6 weeks",
      "instructor": "Mark Anderson",
      "enrollmentCapacity": 35,
      "availableSeats": 18,
      "specialSeats": 6
    },
    {
      "courseName": "Machine Learning Fundamentals",
      "courseDescription": "Dive into the fundamentals of machine learning and AI.",
      "courseDuration": "10 weeks",
      "instructor": "Emily Brown",
      "enrollmentCapacity": 50,
      "availableSeats": 25,
      "specialSeats": 10
    },
    {
      "courseName": "Graphic Design Masterclass",
      "courseDescription": "Master the art of graphic design and digital illustration.",
      "courseDuration": "8 weeks",
      "instructor": "David Wilson",
      "enrollmentCapacity": 30,
      "availableSeats": 15,
      "specialSeats": 5
    },
    {
      "courseName": "Digital Marketing Strategies",
      "courseDescription": "Learn effective digital marketing strategies for businesses.",
      "courseDuration": "7 weeks",
      "instructor": "Linda Martinez",
      "enrollmentCapacity": 25,
      "availableSeats": 12,
      "specialSeats": 4
    },
    {
      "courseName": "Creative Writing Workshop",
      "courseDescription": "Enhance your creative writing skills with expert guidance.",
      "courseDuration": "6 weeks",
      "instructor": "Robert Turner",
      "enrollmentCapacity": 20,
      "availableSeats": 10,
      "specialSeats": 3
    },
    {
      "courseName": "Financial Planning for Beginners",
      "courseDescription": "Learn the basics of personal finance and financial planning.",
      "courseDuration": "5 weeks",
      "instructor": "Susan Adams",
      "enrollmentCapacity": 30,
      "availableSeats": 15,
      "specialSeats": 5
    },
    {
      "courseName": "Photography Fundamentals",
      "courseDescription": "Master the art of photography and composition.",
      "courseDuration": "6 weeks",
      "instructor": "Richard Miller",
      "enrollmentCapacity": 25,
      "availableSeats": 12,
      "specialSeats": 4
    },
    {
      "courseName": "Art History and Appreciation",
      "courseDescription": "Explore the history of art and famous art movements.",
      "courseDuration": "4 weeks",
      "instructor": "Helen Turner",
      "enrollmentCapacity": 20,
      "availableSeats": 10,
      "specialSeats": 3
    },
    {
      "courseName": "Creative Coding with Processing",
      "courseDescription": "Combine art and coding with creative coding projects.",
      "courseDuration": "5 weeks",
      "instructor": "James Clark",
      "enrollmentCapacity": 30,
      "availableSeats": 15,
      "specialSeats": 5
    },
    {
      "courseName": "History of World Literature",
      "courseDescription": "Explore literary classics from around the world.",
      "courseDuration": "6 weeks",
      "instructor": "Alice Turner",
      "enrollmentCapacity": 25,
      "availableSeats": 12,
      "specialSeats": 4
    },
    {
      "courseName": "Yoga and Meditation Practice",
      "courseDescription": "Improve your physical and mental well-being through yoga and meditation.",
      "courseDuration": "8 weeks",
      "instructor": "Lisa Davis",
      "enrollmentCapacity": 20,
      "availableSeats": 10,
      "specialSeats": 3
    },
    {
      "courseName": "Cooking Masterclass",
      "courseDescription": "Learn to cook delicious meals and culinary techniques.",
      "courseDuration": "7 weeks",
      "instructor": "Michael White",
      "enrollmentCapacity": 25,
      "availableSeats": 12,
      "specialSeats": 4
    },
    {
      "courseName": "Digital Art and Illustration",
      "courseDescription": "Create digital art and illustrations with digital tools.",
      "courseDuration": "6 weeks",
      "instructor": "Ella Garcia",
      "enrollmentCapacity": 30,
      "availableSeats": 15,
      "specialSeats": 5
    },
    {
      "courseName": "Environmental Science Basics",
      "courseDescription": "Explore the fundamentals of environmental science and conservation.",
      "courseDuration": "5 weeks",
      "instructor": "Paul Adams",
      "enrollmentCapacity": 25,
      "availableSeats": 12,
      "specialSeats": 4
    },
    {
      "courseName": "Music Theory and Composition",
      "courseDescription": "Learn the principles of music theory and composition.",
      "courseDuration": "6 weeks",
      "instructor": "Sarah Johnson",
      "enrollmentCapacity": 20,
      "availableSeats": 10,
      "specialSeats": 3
    },
    {
      "courseName": "Introduction to Astronomy",
      "courseDescription": "Explore the wonders of the universe and astronomy.",
      "courseDuration": "4 weeks",
      "instructor": "John Smith",
      "enrollmentCapacity": 30,
      "availableSeats": 15,
      "specialSeats": 5
    },
  ];
  
  // Continue adding more courses if needed...
  