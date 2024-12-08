package competititonTest;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;

import competition.Competition;
import competition.CompetitorsNumberNotPowerOfTwoException;
import competition.League;
import competitor.Competitor;
import match.Match;
import match.RandomMatch;
import match.matchobserver.MatchObserver;

public class LeagueTest extends CompetitionTest {

	@Override
	protected Competition createCompetition(List<Competitor> list_comp,ArrayList<MatchObserver>ob) {
			return new League(list_comp,ob);
		
	}
	@Test
	 public void playTest() throws CompetitorsNumberNotPowerOfTwoException {
		 this.init();
			this.myCompetition.play();
			Map<Competitor,Integer>results=new HashMap<>();
			results=this.myCompetition.ranking();
			int max=0;
			for(int i: results.values()) {
				if(i>max) {
					max=i;
				} 
			}
		assertEquals(max,this.myCompetition.comp_winner().getNb_Points());
		}
	 }

