class Employee
    attr_reader :salary 
    attr_accessor :boss
    def initialize(name, title, salary,boss = nil)
        @name = name
        @title = title  
        @salary = salary
        @boss = boss

    end

    def bonus(mult)
        @salary = @salary * mult

    end

    def boss=(boss)
        self.boss = boss 
        boss.employees << self
    end
end

class Manager < Employee

    def initialize
        super
        @employees = []
    end

    def bonus(mult)
        total = 0
        @employees.each do |employee|
           total += employee.salary

        end
        total * mult
    end

    # def subordinate(sub_subordinate)
    #     until @boss.nil?
    #         @employees << sub_subordinate
    # end

end


# p ned = Manager.new('Ned', 'Founder', 1000000, nil)
# p darren = Manager.new('Darren', 'TA Manager', 78000, 'Ned')
david = Employee.new('David', 'TA', 10000)
# p ned.bonus(5) # => 500_000
# p darren.bonus(4) # => 88_000
david.bonus(3) # => 30_000