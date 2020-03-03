require 'database_connection'

describe DatabaseConnection do
  describe '.setup' do
    it 'connects to the database' do
      expect(PG).to receive(:connect).with(dbname: 'hangry_development')
      DatabaseConnection.setup('hangry_development')
    end
  end

  describe '.connection' do
    it 'the connection is persistent' do
      connection = DatabaseConnection.setup('hangry_development')
      expect(DatabaseConnection.connection).to eq connection
    end
  end
end