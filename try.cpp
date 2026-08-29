#include <iostream>
using namespace std;

// Function to solve 0/1 Knapsack
int knapsackDP(int W, int wt[], int val[], int n) {
    int dp[21][101] = {0};

    // Build DP table
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {

            if (wt[i - 1] <= w) {
                dp[i][w] = max(
                    val[i - 1] + dp[i - 1][w - wt[i - 1]],
                    dp[i - 1][w]
                );
            }
            else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][W];
}

int main() {
    int n, W;
    int val[20], wt[20];

    // Input number of items
    cout << "Enter number of items: ";
    cin >> n;

    // Input knapsack capacity
    cout << "Enter capacity of knapsack: ";
    cin >> W;

    // Input values
    cout << "Enter values of items:\n";
    for (int i = 0; i < n; i++) {
        cin >> val[i];
    }

    // Input weights
    cout << "Enter weights of items:\n";
    for (int i = 0; i < n; i++) {
        cin >> wt[i];
    }

    // Calculate maximum value
    int maxValue = knapsackDP(W, wt, val, n);

    // Output result
    cout << "Maximum value achievable = " << maxValue << endl;

    return 0;
}