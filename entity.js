const gym = {
    _id: ObjectId(), // Primary key
    Name: "Example Gym",
    address: "123 Main St, City, Country",
    telephone: "+1234567890",
    sessions: [
        {
            _id: ObjectId(), // Session's primary key
            sport_type: "Yoga",
            schedule: ISODate("2024-06-19T09:00:00Z"),
            max_capacity: 20,
            members: [
                { member_id: ObjectId(), last_name: "joe", first_name: "John" },
                { member_id: ObjectId(), last_name: "kachi", first_name: "Jane" },
                { member_id: ObjectId(), last_name: "paul", first_name: "drake" }

            ],
            coaches: [
                { coach_id: ObjectId(), last_name: "Trainer", first_name: "Alice", age: 30, specialty: "Yoga" }
                
            ]
        },
        {
            _id: ObjectId(), 
            sport_type: "cardio",
            schedule: ISODate("2024-06-19T09:00:00Z"),
            max_capacity: 20,
            members: [
                { member_id: ObjectId(), last_name: "joe", first_name: "John" },
                { member_id: ObjectId(), last_name: "kachi", first_name: "Jane" },
                { member_id: ObjectId(), last_name: "paul", first_name: "drake" }

            ],
            coaches: [
                { coach_id: ObjectId(), last_name: "Trainer", first_name: "Alice", age: 30, specialty: "Yoga" },
                { coach_id: ObjectId(), last_name: "Trainer", first_name: "Alice", age: 30, specialty: "Yoga" }

            ]
        },
    ]
}
