package competititonTest;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;

import competition.Competition;
import competition.CompetitorsNumberNotPowerOfTwoException;
import competition.Tournament;
import competitor.Competitor;
import match.Match;
import match.matchobserver.MatchObserver;

public class TournamentTest extends CompetitionTest {
	protected Competition createCompetition(List<Competitor> list_comp, ArrayList<MatchObserver> ob) {
		
	Tournament t=null;
	try { 
			t=new Tournament(list_comp,ob); 
		}
		catch(CompetitorsNumberNotPowerOfTwoException e) {
			e.printStackTrace();
		}
		return t;
	}
	
	@Test
	public void playtest() {
		try {
			this.init();
		} catch (CompetitorsNumberNotPowerOfTwoException e) {
			e.printStackTrace();
		}
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
