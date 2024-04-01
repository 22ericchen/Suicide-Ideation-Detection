import matplotlib.pyplot as plt

def create_graph(percentages, results, kind, path):
    plt.plot(percentages, results['precision'], label='Precision')
    plt.plot(percentages, results['recall'], label='Recall')
    plt.plot(percentages, results['f1'], label='F1 Score')
    plt.plot(percentages, results['accuracy'], label='Accuracy')
    plt.xlabel('Percentage of Training Data')
    plt.ylabel('Score')
    plt.title(f'Performance of {kind} vs. Training Data Size')
    plt.legend()
    plt.savefig(path)
    plt.show()