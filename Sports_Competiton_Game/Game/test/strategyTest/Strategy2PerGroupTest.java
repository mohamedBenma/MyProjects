package strategyTest;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;

import strategy.Strategy;
import strategy.Strategy2PerGroup;

public class Strategy2PerGroupTest extends StrategyTest {


	@Override
	protected Strategy createStrategy(int winnerPerGroup, int nbrPlayersDrafted, int playersDraftedPos) {
		
		return new Strategy2PerGroup();
	}
	@Test
	public void  getNbrPlayersDraftedTest() { 
		assertEquals(this.myStrategy.getNbrPlayersDrafted(),0);
	} 
	@Test
	public void getPlayersDraftedPosTest() {
		assertEquals(this.myStrategy.getPlayersDraftedPos(),0);
	}
	@Test
	public void getWinnerpergroupTest() {
		assertEquals(this.myStrategy.getWinnerpergroup(),2);
	}

}
