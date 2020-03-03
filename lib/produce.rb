require 'pg'

class Produce
  def self.all
    connection = PG.connect(dbname: 'hangry_development')
    result = connection.exec('SELECT * FROM produce')
    result.map { |item| item['name']}
  end

  def self.in_season
    connection = PG.connect(dbname: 'hangry_development')
    result = connection.exec('SELECT * FROM produce WHERE current_date <@ daterange1 OR current_date <@ daterange2;')
    result.map { |item| item['name'] }
  end
end
