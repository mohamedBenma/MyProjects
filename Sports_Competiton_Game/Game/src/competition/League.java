package competition;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import competitor.Competitor;
import match.Match;
import match.RandomMatch;
import match.matchobserver.MatchObserver;

public class League extends Competition {

	public League(List<Competitor> league_players,ArrayList<MatchObserver> observers) {
		super(league_players,observers);
	}

	protected void play(List<Competitor> league_players) {
		System.out.println("     --League-- ");
		for (Competitor c1: league_players) {
			for (Competitor c2: league_players) {
				if(!c1.equals(c2)) {
					playMatch(c1,c2);
				}
			}
			
		}	 
	}
	



}
