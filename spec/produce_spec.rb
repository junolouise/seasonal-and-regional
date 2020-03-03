require 'produce'

describe Produce do
  describe '.all' do
    it 'returns a list of produce' do
      produce = Produce.all
      expect(produce).to include 'potato'
      expect(produce).to include 'tomato'
      expect(produce).to include 'leek'
    end
  end
end
