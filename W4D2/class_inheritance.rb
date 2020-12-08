class Employee
    attr_reader :salary
    def initialize(name, title, salary,boss)
        @name = name
        @title = title  
        @salary = salary
        @boss = boss

    end

    def bonus(mult)
        @salary = @salary * mult

    end
end

class Manager < Employee

    def initialize(employees)
        super
        @employees = employees
    end

    def bonus(mult)
        total = 0
        @employees.each do |employee|
           total += employee.salary

        end
        total * mult
    end

    def subordinate(sub_subordinate)
        until @boss.nil?
        @employees << sub_subordinate
    end

end


p ned = Employee.new('Ned', 'Founder', 1000000, nil)
p darren = Employee.new('Darren', 'TA Manager', 78000, 'Ned')
p david = Employee.new('David', 'TA', 10000, 'Darren')
p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000