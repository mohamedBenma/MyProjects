package match;

import java.util.Random;

import competitor.Competitor;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;

public class RandomMatch extends Match {

	
	public RandomMatch(Competitor c1,Competitor c2) {
		super(c1, c2);
	}
	/**
	 * @param c1 the first competitor
	 * @paramc2 the second competitor
	 * @return the winner of the match between c1 and c2
	 */
	public void OrganizeMatch() {
		
		Competitor c1=this.getC1();
		Competitor c2=this.getC2();
		Random r=new Random();
		int ind_player=r.nextInt(2);
		if (ind_player==0) {
			c1.addPoint();
			this.winner=c1;
			this.looser=c2;
		}
		else {
			c2.addPoint();
			this.winner=c2;
			this.looser=c1;
	
			
		}
	}
	
	

}
