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
        @employees = employees
    end

    def bonus(mult)
        total = 0
        @employees.each do |employee|
           total += employee.salary

        end
        total * mult
    end
end
ned = .new()
ned.bonus(5) # => 500_000
darren.bonus(4) # => 88_000
david.bonus(3) # => 30_000