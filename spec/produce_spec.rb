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

  describe '.in_season' do
    it 'returns a list of in season produce' do
      produce = Produce.in_season
      expect(produce).to include 'halibut'
    end
  end
end
