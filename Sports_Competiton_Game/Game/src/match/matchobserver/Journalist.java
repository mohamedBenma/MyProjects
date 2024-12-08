package match.matchobserver;

import competitor.Competitor;
import match.Match;

public class Journalist implements MatchObserver {
	String name;


	public Journalist(String name) {
		this.name=name;
	}
	/**
	 * 
	 * @return the journalist's name
	 */
	public String getName() {
		return this.name;
	}




	public void ObserverReact(Match match) {

		Competitor winner=match.getWinner();
		Competitor c1=match.getC1();
		Competitor c2=match.getC2(); 
		if (winner==c1) {
			System.out.println("Journaliste :("+this.getName()+")"+ ":le match vient de finir sur une victoire de "
					+ c1.getPlayer_Name());
		}
		else {
			System.out.println("Journaliste :("+this.getName()+")"+ ":le match vient de finir sur une victoire de "
					+ c2.getPlayer_Name());
		}
	}


}
