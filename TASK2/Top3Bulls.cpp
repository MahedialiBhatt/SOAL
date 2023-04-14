#include<bits/stdc++.h>
using namespace std;

int findTopThreeFastestBulls(){
	
	cout<<" asd";
	
	int ans = 0;
	
	//We wiil do race of 5 group so number of race count will be increased to 5
	
	//Will do races like 1 to 5, 6 to 10, .... 21 to 25 -> from each group we will pick only top 3 and eliminate left one
	
	//so number of horses left will be -> 25 - (5*2) = 15 
	
	//store top3 horses from each grop
    vector<vector<int>> horses;
    
    for(int i=1;i<=25;){	
     	int k=0;
    	vector<int> temp;
    	while(k<5){
    		
    		if(k<3)
    		 temp.push_back(i);
    		k++;
    		i++;
		}
		horses.push_back(temp);
    	ans++;
	}
	
	//We got 15 horses now we will do 6th race
	
	// in 6th race we will pick fastest from each group
	
	ans++;

	//We will remove last 2 groups from horses array because we need top3 horses so group 4 fastest horse comes 4th among all other groups so there's no need of 3,4 group
	
    horses.pop_back();
	horses.pop_back(); 

    // we left with the 9 horses -> 1 2 3     a
    //                              6 7 8     b
	//                              11 12 13  c   
    
    // in 6th race whichever horses comes first it will be 1st among all horses 
    // Number 1 horse is 1 so no need to include in 7th race. so there's 8 horses left
    // 11th comes 3rd in 6th race so we remove all horses after that
	
	//so we left with 6 -> 2 3 6 7 8 11 
	
	//further 8 will be removed because aasume that 6th number horses is might be 2nd winner so the 3rd possible winner is 7 not 8 so we will remove 8 so are left with the 5 horses 2 3 6 7 11
	
	//we will do 7th race among those 5 horses and we choose 1 st and 2nd and 2nd as a 3rd
	
	ans++;  
		
	return ans;
}

int main(){
	
	//No. of bulls is 25
	
	int minNumberOfRace = findTopThreeFastestBulls();
	
	cout<<" Minimum number of races required id: "<< minNumberOfRace<<endl;
	
	return 0;
}



