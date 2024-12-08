package strategyTest;

import org.junit.jupiter.api.Test;

import competition.League;
import competitor.Competitor;
import match.RandomMatch;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;
import match.matchobserver.MatchObserver;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import strategy.Strategy;
import strategy.Strategy2perGroupNdTwoBestThird;

public class Strategy2perGroupNdTwoBestThirdTest extends StrategyTest {


	@Override
	protected Strategy createStrategy(int winnerPerGroup, int nbrPlayersDrafted, int playersDraftedPos) {
		ArrayList<MatchObserver>mo=new ArrayList<>();
		mo.add(new Journalist("frederic"));
		mo.add(new BookMaker("bet"));
		Competitor c9=new Competitor("denzel");
		c9.setNb_Points(6);
		Competitor c10=new Competitor("catherine");
		c10.setNb_Points(4);
		Competitor c11=new Competitor("soolking");
		c11.setNb_Points(2);
		Competitor c12=new Competitor("waxx");
		List<Competitor>comp_list3=new ArrayList<>();
		comp_list3.add(c9);
		comp_list3.add(c10);
		comp_list3.add(c11);
		comp_list3.add(c12);
		League nord=new League(comp_list3,mo);
		this.leagues.add(nord);
		return new Strategy2perGroupNdTwoBestThird();
	}
	@Test
	public void  getNbrPlayersDraftedTest() {
		assertEquals(this.myStrategy.getNbrPlayersDrafted(),2);
	}
	@Test
	public void getPlayersDraftedPosTest() {
		assertEquals(this.myStrategy.getPlayersDraftedPos(),3);
	}
	@Test
	public void getWinnerpergroupTest() {
		assertEquals(this.myStrategy.getWinnerpergroup(),2);
	}

}
