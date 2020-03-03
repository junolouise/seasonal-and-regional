require './lib/database_connection'

class Produce
  def self.all
    result = DatabaseConnection.query('SELECT * FROM produce')
    result.map { |item| item['name']}
  end

  def self.in_season
    result = DatabaseConnection.query('SELECT * FROM produce WHERE current_date <@ daterange1 OR current_date <@ daterange2')
    result.map { |item| item['name'] }
  end
end
