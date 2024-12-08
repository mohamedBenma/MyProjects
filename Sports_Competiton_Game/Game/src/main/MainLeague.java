package main;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Scanner;

import competition.CompetitorsNumberNotPowerOfTwoException;
import competition.League;
import competitor.Competitor;
import match.Match; 
import match.RandomMatch;
import match.matchobserver.BookMaker; 
import match.matchobserver.Journalist;
import match.matchobserver.MatchObserver;
import match.matchobserver.MatchReminder;

public class MainLeague {
	public static void main(String[] args) throws CompetitorsNumberNotPowerOfTwoException {
		int nbrjoueurs;
		String playername;  
		Journalist j=new Journalist("Raymond");
		BookMaker bookmaker=new BookMaker("Betetmechant"); 
		Journalist k=new Journalist("jeje"); 
		Match match;   
		MatchReminder matchreminder=new MatchReminder();
		ArrayList<MatchObserver> matchObservers = new ArrayList<MatchObserver>();
		matchObservers.add(j);
		matchObservers.add(bookmaker);
		matchObservers.add(k);
		ArrayList<Competitor>Comp1=new ArrayList<Competitor>();
		Competitor c;
		Scanner clavier=new Scanner(System.in);
		System.out.println("Donnez le nombre de joueurs SVP!"); 
		nbrjoueurs=clavier.nextInt();
		System.out.println("-----Donnez le noms des "+ nbrjoueurs +" joueurs !----");
		Scanner s=new Scanner(System.in);
		for(int i=0;i<nbrjoueurs;i++) {
			System.out.println("Joueur "+(i+1)+" :");
			playername=s.nextLine();
			c=new Competitor(playername); 
			Comp1.add(c);
		}
		
		League mls=new League(Comp1,matchObservers);
		mls.play();
			System.out.println("*** Ranking ***");
		for (Map.Entry<Competitor, Integer> entry : mls.ranking().entrySet()) {
			System.out.println(entry.getKey().getPlayer_Name()+"- "+entry.getValue());
		}
		System.out.println("le grand vainqueur de la competition est "+mls.comp_winner().getPlayer_Name());
	} 
	
	

}
