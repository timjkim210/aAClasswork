# == Schema Information
#
# Table name: enrollments
#
#  id         :bigint           not null, primary key
#  course_id  :integer
#  student_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# courses have many users, and users have many courses
# enrollment can belong to both user and course

class Enrollment < ApplicationRecord
    belongs_to :user,
        foreign_key: :student_id,
        primary_key: :id, # referencing the id within Enrollment.
        class_name: :User

    belongs_to :course,
        foreign_key: :course_id,
        primary_key: :id,
        class_name: :Course 
end

