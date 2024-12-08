package strategyTest;

import org.junit.jupiter.api.Test;
import static org.junit.Assert.*;
import strategy.Strategy;
import strategy.Strategy1PerGroup;

public class Strategy1PerGroupTest extends StrategyTest {


	@Override
	protected Strategy createStrategy(int winnerPerGroup, int nbrPlayersDrafted, int playersDraftedPos) {
		return new Strategy1PerGroup();
	}
	@Test
	public void  getNbrPlayersDraftedTest() {
		this.init();
		assertEquals(this.myStrategy.getNbrPlayersDrafted(),0);
	}
	@Test
	public void getPlayersDraftedPosTest() {
		assertEquals(this.myStrategy.getPlayersDraftedPos(),0);
	} 
	@Test
	public void getWinnerpergroupTest() {
		this.init();
		assertEquals(this.myStrategy.getWinnerpergroup(),1);
		System.out.println(this.comp_list1.get(0).getPlayer_Name());
	}

}
