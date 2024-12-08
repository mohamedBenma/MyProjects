package competition;

import java.util.List;
import java.util.Random;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;

import competitor.Competitor;
import match.Match;
import match.RandomMatch;
import match.matchobserver.MatchObserver;

public class Tournament extends Competition {


	public Tournament(List<Competitor> competitors,ArrayList<MatchObserver> observers)throws CompetitorsNumberNotPowerOfTwoException  {
		super(competitors,observers);
		if (!IsPowerOfTwo(competitors.size())){
			throw new CompetitorsNumberNotPowerOfTwoException ("the number of competitors is incorect"+competitors.size());
			}
		}
	
	protected void play(List<Competitor> tournamentComp) {
		int round=0;
		List<Competitor> tournamentPlay=tournamentComp;
		while (tournamentPlay.size()>1) {
			Iterator<Competitor> it=tournamentPlay.iterator();
			while(it.hasNext()) {
				Competitor comp1=it.next();
				if (it.hasNext()) {
					Competitor comp2=it.next();
					this.playMatch(comp1, comp2);
				}
			}
			round+=1;
			List <Competitor>winners_round=new ArrayList<Competitor>();
			for (Competitor c: tournamentPlay) {
				if (this.getComp_rank().get(c)==round) {
					winners_round.add(c);
				}	
		}
			tournamentPlay=winners_round;
			 
	}
		
	System.out.println("----------le grand vaiqueur de la compétition est "+ this.comp_winner().getPlayer_Name());	
	

}
}
