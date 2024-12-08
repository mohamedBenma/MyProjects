package competititonTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Observer;

import competition.Competition;
import competitor.Competitor;
import match.Match;
import match.RandomMatch;
import match.matchobserver.MatchObserver;

public class MockCompetition extends Competition {

	public MockCompetition(List<Competitor> competitors,ArrayList<MatchObserver> ob) {
		super(competitors,ob);
	}
	
	protected void play(List<Competitor> competitors) {

	}
	protected  void playMatch(Competitor c1, Competitor c2) {
		Match match=new RandomMatch(c1,c2); 
		match.OrganizeMatch();
		Competitor winner=match.getWinner();
		this.getmR().MatchRemind(match);
		System.out.println(c1.getPlayer_Name()+" vs "+c2.getPlayer_Name()+" --> "+winner.getPlayer_Name()+" wins!" );
		this.setComp_rank(comp_rank,winner);
	}
	

}
