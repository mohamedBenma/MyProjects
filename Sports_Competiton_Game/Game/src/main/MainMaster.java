package main;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Scanner;
import competition.CompetitorsNumberNotPowerOfTwoException;
import competition.Master;
import competition.MasterCannotBeOrganized;
import competitor.Competitor;
import match.Match;
import match.RandomMatch;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;
import match.matchobserver.MatchObserver;
import strategy.Strategy; 
import strategy.Strategy2PerGroup;
import strategy.Strategy2perGroupNdTwoBestThird;
import strategy.Strategy1PerGroup;

public class MainMaster{
	public static void main(String[] args) throws CompetitorsNumberNotPowerOfTwoException, MasterCannotBeOrganized {
		Journalist j=new Journalist("Raymond");
		Journalist k=new Journalist("balde");
		BookMaker bookmaker=new BookMaker("Betetmechant");
		ArrayList<MatchObserver> matchObservers = new ArrayList<MatchObserver>();
		matchObservers.add(j);
		matchObservers.add(k);
		matchObservers.add(bookmaker); 
		
		int nbrpoules; 
		int nbrjoueurs; 
		int strategynbr;
		Strategy strat=new Strategy2PerGroup();
		String playername;
		ArrayList<Competitor>Comp1=new ArrayList<Competitor>();
		Competitor c;
		Scanner clavier=new Scanner(System.in);
		System.out.println("Donnez le nombre de poules SVP!");
		nbrpoules=clavier.nextInt();
		System.out.println("Donnez le nombre de joueurs SVP!");
		nbrjoueurs=clavier.nextInt();
		System.out.println("pour quelle strategie avez-vous opté ?");
		System.out.println("1: le premier de chaque poule--");
		System.out.println("2:les 2 premiers de chaque poule auxquels s’ajoutent les 2 meilleurs troisiemes");
		System.out.println("3: les deux (2) premiers de chaque poule--");
		
		strategynbr=clavier.nextInt();
		switch(strategynbr) {
		case 1:
			strat=new Strategy1PerGroup();
			break;
		case 2:
			strat=new Strategy2perGroupNdTwoBestThird();
			break;
		case 3:
			strat=new Strategy2PerGroup();
			break;
		 
		}
		Scanner s=new Scanner(System.in);
		System.out.println("-----Donnez le noms des "+ nbrjoueurs +" joueurs !----");
		for(int i=0;i<nbrjoueurs;i++) {
			System.out.println("Joueur "+(i+1)+" :");
			playername=s.nextLine();
			c=new Competitor(playername);
			Comp1.add(c);
		}
		try {
		
		Master mls=new Master(Comp1,strat,nbrpoules,matchObservers);
		mls.play(); 
		}
		
		catch(MasterCannotBeOrganized e){
			System.out.println("la competiton ne peut pas avoir lieu,Veuillez introduire une autre configuration");
		}
		
			/**System.out.println("*** Ranking ***");
		for (Map.Entry<Competitor, Integer> entry : mls.ranking().entrySet()) {
			System.out.println(entry.getKey().getPlayer_Name()+"- "+entry.getValue());
		}**/
	}
}