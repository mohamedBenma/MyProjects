package matchTest;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.Before;
import org.junit.Test;

import competitor.Competitor;
import match.Match;
import match.RandomMatch;

public class MatchRandomTest extends MatchTest {

	protected Match createMatch(Competitor c1,Competitor c2) {
		return new RandomMatch(c1,c2); 
	}
	@Test
	public void OrganizeMatchTest() {
		this.init();
		int comp1_points=this.myMatch.getC1().getNb_Points();
		int comp2_points=this.myMatch.getC2().getNb_Points();
		assertEquals(comp1_points,0);
		assertEquals(comp2_points,0);
		this.myMatch.OrganizeMatch();
		int finalcomp1_points=this.myMatch.getC1().getNb_Points();
		int finalcomp2_points=this.myMatch.getC2().getNb_Points();
		assertTrue(finalcomp1_points==1||finalcomp2_points==1);
	}
}
