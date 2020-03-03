require 'pg'

class Produce
  def self.all
    connection = PG.connect(dbname: 'hangry_development')
    result = connection.exec('SELECT * FROM produce')
    result.map { |item| item['name']}
  end
end